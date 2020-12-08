import { DEPLOY_ENV } from '@newrade/core-env';
import { COMMON_ENV, log, LOG_LEVEL } from '@newrade/core-utils';
import { es6BabelLoader, getBundleVisualizerPlugin } from '@newrade/core-webpack-config';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { GatsbyNode } from 'gatsby';
import { RuleSetRule, RuleSetRules, RuleSetUseItem, WebpackOptions } from 'webpack/declarations/WebpackOptions';
import { createPagesFunction, onCreatePageFunction } from './src/create-pages';

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = (args, options, callback) => {
  // TODO: find a way to get the package name
  const toolName = __dirname;

  log(`GATSBY_ENABLE_INCREMENTAL_BUILD is set to "${process.env.GATSBY_ENABLE_INCREMENTAL_BUILD}"`, {
    toolName,
  });

  if (process.env.GATSBY_ENABLE_INCREMENTAL_BUILD !== 'true') {
    callback && callback(null);
    return;
  }

  log(`rebuilding core-* packages for gatsby cloud's incremental build`, {
    toolName,
  });

  const cwd = spawn(`yarn postinstall`, {
    cwd: '../..',
    shell: true,
    env: process.env,
  });

  cwd.stdout.on('data', (data) => {
    log(`${data}`, {
      toolName,
    });
  });

  cwd.stdout.on('error', (data) => {
    log(`rebuilding core-* packages: ${chalk.green('error')}`, {
      toolName,
      level: LOG_LEVEL.ERROR,
    });
    log(data?.message, {
      toolName,
      level: LOG_LEVEL.ERROR,
    });
    callback && callback(data);
  });

  cwd.on('close', (code) => {
    log(`rebuilding core-* packages: ${chalk.green('done')}`, {
      toolName,
    });
    callback && callback(null);
  });
};

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {},
  });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  getConfig,
}) => {
  const env = process.env as COMMON_ENV;
  const isProduction = stage !== `develop`;
  const isSSR = stage.includes(`html`);

  if (stage === 'develop-html') {
    return {};
  }

  /**
   * Plugins applied for dev and production modes
   */
  const commonPlugins: WebpackOptions['plugins'] = [];

  /**
   * Plugins applied for production only
   */
  const productionPlugins: WebpackOptions['plugins'] = [];

  /**
   * Plugins applied in production, but when built local only
   */
  const productionLocalOnlyPlugins: WebpackOptions['plugins'] = [];

  // const config: WebpackOptions = {
  //   plugins: isProduction
  //     ? [...commonPlugins, ...productionPlugins, ...productionLocalOnlyPlugins]
  //     : [...commonPlugins],
  // };

  const config = getConfig() as WebpackOptions;

  if (!config) {
    return {};
  }

  /**
   * Replace the devtool option
   */
  config.devtool = env.APP_ENV === DEPLOY_ENV.LOCAL ? 'source-map' : 'cheap-source-map';

  /**
   * Replace Gatsby default babel config
   */
  if (typeof config === 'object' && config.entry && (config.entry as Record<string, string>)['polyfill']) {
    delete (config.entry as Record<string, string>)['polyfill'];
  }

  /**
   * Replace Gatsby default babel config
   *
   * @see https://github.com/gatsbyjs/gatsby/blob/master/packages/babel-preset-gatsby/src/dependencies.ts
   */
  const babelLoaderPredicate = (rule: RuleSetRule) =>
    String(rule.test) === '/\\.(js|mjs|jsx)$/' || String(rule.test) === '/\\.(js|mjs)$/';
  const negateBabelLoaderPredicate = (rule: RuleSetRule) => !babelLoaderPredicate(rule);
  const tsLoaderPredicate = (rule: RuleSetRule) => String(rule.test) === '/\\.tsx?$/';
  const negateTsLoaderPredicate = (rule: RuleSetRule) => !tsLoaderPredicate(rule);
  if (config.module?.rules) {
    const [gatsbyBabelLoaderConf] = config.module.rules.filter(babelLoaderPredicate);

    config.module.rules = [
      ...config.module.rules.filter(negateBabelLoaderPredicate),
      {
        ...gatsbyBabelLoaderConf,
        use: [
          {
            ...(gatsbyBabelLoaderConf.use as any)[0],
            options: { ...(gatsbyBabelLoaderConf.use as any)[0].options, ...(es6BabelLoader.use as any)[0].options },
          },
        ],
      },
    ];

    const [modifiedGatsbyBabelLoaderConf] = config.module.rules.filter(babelLoaderPredicate);
  }

  /**
   * Replace gatsby-ts-plugin options
   */
  if (config.module?.rules) {
    const [tsLoaderConf] = config.module.rules.filter(tsLoaderPredicate);
    const [gatsbyBabelLoaderConf] = config.module.rules.filter(babelLoaderPredicate);
    const [tsLoaderUseConf] = (tsLoaderConf.use as RuleSetUseItem[]).filter(
      (use: any) => !/babel-loader/.test(use.loader)
    );

    config.module.rules = [
      ...config.module.rules.filter(negateTsLoaderPredicate),
      {
        ...tsLoaderConf,
        use: [(gatsbyBabelLoaderConf as any).use[0], tsLoaderUseConf] as RuleSetRule[],
        exclude: /public|static/,
      },
    ] as RuleSetRules;

    const [modifiedTsLoaderConf] = config.module.rules.filter(tsLoaderPredicate);
  }

  /**
   * Add BundleVisualizer when building for production but local only
   */
  if (isProduction && stage === 'build-javascript' && env.APP_ENV === DEPLOY_ENV.LOCAL) {
    config.plugins = config.plugins ? [...config.plugins, getBundleVisualizerPlugin()] : [getBundleVisualizerPlugin()];
  }

  actions.replaceWebpackConfig(config); // completely replace the webpack config with the modified object
};

export const createPages: GatsbyNode['createPages'] = createPagesFunction;
export const onCreatePage: GatsbyNode['onCreatePage'] = onCreatePageFunction;
