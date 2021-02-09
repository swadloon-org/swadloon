import { DEPLOY_ENV } from '@newrade/core-common';
import { COMMON_ENV } from '@newrade/core-utils';
import {
  es6BabelLoader,
  getBundleVisualizerPlugin,
  getLodashPlugin,
  getWebpackStatsPlugin,
  webpackStatsConf,
} from '@newrade/core-webpack-config';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import regexEscape from 'regex-escape';
import { RuleSetRule, RuleSetRules, RuleSetUseItem, WebpackOptions } from 'webpack/declarations/WebpackOptions';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

export const onCreateWebpackConfigFunction: GatsbyNode['onCreateWebpackConfig'] = (
  { stage, rules, loaders, plugins, actions, getConfig },
  options
) => {
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;
  const env = process.env as COMMON_ENV;
  const isProduction = stage !== `develop`;

  if (stage !== `build-javascript`) {
    return;
  }

  /**
   * Retrieve the initial gatsby webpack config
   */
  const config = getConfig() as WebpackOptions;

  if (!config) {
    return {};
  }

  /**
   * Replace the devtool option
   */
  config.devtool = env.APP_ENV === DEPLOY_ENV.LOCAL ? 'source-map' : 'cheap-source-map';

  /**
   * Enable `module` in mainfields
   */
  if (typeof config === 'object' && config.resolve) {
    config.resolve.mainFields = ['browser', 'module', 'main'];
  }

  /**
   * Configure stats for webpack
   */
  if (typeof config === 'object' && env.APP_ENV === DEPLOY_ENV.LOCAL) {
    config.stats = {
      ...(typeof config.stats === 'object' ? config.stats : {}),
      ...webpackStatsConf.dev,
    };

    config.plugins?.push(getWebpackStatsPlugin());
  }

  /**
   * Add lodash plugin
   */
  if (typeof config === 'object') {
    config.plugins?.push(getLodashPlugin());
  }
  if (typeof config === 'object' && config.resolve) {
    config.resolve.alias = {
      ...(typeof config.resolve.alias === 'object' ? config.resolve.alias : {}),
      lodash: 'lodash-es',
    };
  }

  /**
   * Alias date-fsn
   * @see https://date-fns.org/v2.17.0/docs/ECMAScript-Modules
   */
  if (typeof config === 'object' && config.resolve) {
    config.resolve.alias = {
      ...(typeof config.resolve.alias === 'object' ? config.resolve.alias : {}),
      'date-fns': 'date-fns/esm',
    };
  }

  /**
   * Replace Gatsby default entry polyfill
   */
  if (typeof config === 'object' && config.entry && (config.entry as Record<string, string>)['polyfill']) {
    delete (config.entry as Record<string, string>)['polyfill'];
  }

  /**
   *
   */
  if (typeof config === 'object') {
    config.optimization = {
      ...config.optimization,
      ...{
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          automaticNameDelimiter: '~',
          cacheGroups: {
            polyfills: {
              name: 'polyfills',
              chunks: 'all',
              test: /(polyfills?(-only)*\.js|fetch\.umd\.js)|[\\/]node_modules[\\/](core-js(-pure)?|@babel)[\\/]/,
            },
            prettier: {
              name: 'prettier',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](prettier)[\\/]/,
            },
            react: {
              name: 'react',
              chunks: 'initial',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            gsap: {
              name: 'gsap',
              chunks: 'initial',
              test: /[\\/]core-gsap-ui[\\/]|[\\/]node_modules[\\/](gsap)[\\/]/,
            },
          },
        },
        runtimeChunk: 'single',
        moduleIds: 'named',
        chunkIds: 'named',
      },
    };
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
        exclude: (modulePath) =>
          /node_modules/.test(modulePath) &&
          // whitelist specific es6 module
          pluginOptions.modules
            ? !new RegExp(
                `[\\\\/](${pluginOptions.modules
                  .map((module) => module.replace(/\//, path.sep))
                  .map(regexEscape)
                  .join('|')})[\\\\/]`
              ).test(modulePath)
            : false,
        // pluginOptions.modules
        //   ? !new RegExp(
        //       `node_modules[\\\\/](${pluginOptions.modules
        //         .map((module) => module.replace(/\//, path.sep))
        //         .map(regexEscape)
        //         .join('|')})[\\\\/]`
        //     ).test(modulePath)
        //   : false,
      },
    ];

    const [modifiedGatsbyBabelLoaderConf] = config.module.rules.filter(babelLoaderPredicate);
  }

  /**
   * Replace gatsby-ts-plugin options
   */
  if (config.module?.rules) {
    const [tsLoaderConf] = config.module.rules.filter(tsLoaderPredicate);

    if (tsLoaderConf && tsLoaderConf.use && (tsLoaderConf.use as RuleSetUseItem[]).length) {
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
  }

  /**
   * Add BundleVisualizer when building for production but local only
   */
  if (isProduction && env.APP_ENV === DEPLOY_ENV.LOCAL) {
    config.plugins = config.plugins ? [...config.plugins, getBundleVisualizerPlugin()] : [getBundleVisualizerPlugin()];
  }

  actions.replaceWebpackConfig(config); // completely replace the webpack config with the modified object
};
