import { GatsbyNode } from 'gatsby';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Configuration, RuleSetRule } from 'webpack';

import { DEPLOY_ENV } from '@newrade/core-common';
import { CommonEnvType } from '@newrade/core-utils';
import {
  getBundleVisualizerPlugin,
  getForkTsCheckerWebpackPlugin,
  getLodashPlugin,
  getTypescriptBabelReactLoader,
  getWebpackStatsPlugin,
  stats,
} from '@newrade/core-webpack-config';

import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

/**
 *
 * @see 'node_modules/gatsby/dist/utils/webpack.config.js'
 */
export const onCreateWebpackConfigFunction: GatsbyNode['onCreateWebpackConfig'] = (
  { stage, rules, loaders, plugins, actions, getConfig, reporter, store },
  options
) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;
  const env = process.env as CommonEnvType;

  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopStage = stage === 'develop';
  const isDevelopSSRStage = stage === 'develop-html';
  const isBuildJavaScriptStage = stage === 'build-javascript';
  const isSSRStage = stage === 'build-html';

  const moduleToParseByBabel = [
    'gatsby-plugin-image',
    ...(pluginOptions.modules ? pluginOptions.modules : []),
  ];

  /**
   * Retrieve the initial gatsby webpack config
   */
  const config = getConfig() as Configuration;

  if (!config) {
    return void 0;
  }

  reporter.info(
    `[${pluginOptions.pluginName}] process.env.TS_NODE_PROJECT: ${process.env.TS_NODE_PROJECT}`
  );
  delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools

  /**
   * Replace the devtool option
   */
  config.devtool = isProduction ? false : 'eval-cheap-module-source-map';

  /**
   * Remove es5 target
   */
  config.target = ['web'];

  /**
   * Enable `module` in mainfields
   */
  config.resolve = {
    ...config.resolve,
    mainFields: ['browser', 'module', 'main'],
  };

  /**
   * Custom settings for watchOptions
   */
  config.watchOptions = {
    ...config.watchOptions,
    ignored: ['*.d.ts', '*.js.map', '**/node_modules'],
  };

  /**
   * Configure stats for webpack
   */
  if (env.APP_ENV === DEPLOY_ENV.LOCAL) {
    config.stats = {
      ...(typeof config.stats === 'object' ? config.stats : {}),
      ...stats.dev,
    };
  }

  if (isProduction) {
    config.plugins?.push(getWebpackStatsPlugin());
  }

  /**
   * Add lodash plugin
   */
  config.plugins?.push(getLodashPlugin());
  config.resolve = {
    ...config.resolve,
    alias: {
      ...(config.resolve && typeof config.resolve.alias === 'object' ? config.resolve.alias : {}),
      lodash: 'lodash-es',
    },
  };

  /**
   * Alias for core-js
   *
   * This is needed since gatsby uses only core-js and not the pure version
   */
  config.resolve = {
    ...config.resolve,
    alias: {
      ...(config.resolve && typeof config.resolve.alias === 'object' ? config.resolve.alias : {}),
      'core-js-pure': 'core-js',
    },
  };

  /**
   * Replace CSS rules
   */

  // TODO:

  /**
   * Filters to find the correct webpack rules
   */

  const babelLoaderPredicate = (rule: RuleSetRule) =>
    String(rule.test) === '/\\.(js|mjs|jsx)$/' ||
    String(rule.test) === '/\\.(js|mjs)$/' || // since gatsby v3
    String(rule.test) === '/\\.js$/i' || // since gatsby v3
    String(rule.test) === '/\\.mjs$/i'; // since gatsby v3
  const negateBabelLoaderPredicate = (rule: RuleSetRule | '...') =>
    !babelLoaderPredicate(rule as RuleSetRule);

  const tsLoaderPredicate = (rule: RuleSetRule) => String(rule.test) === '/\\.tsx?$/';
  const negateTsLoaderPredicate = (rule: RuleSetRule) => !tsLoaderPredicate(rule);

  /**
   * Replace Gatsby default babel config
   *
   * @see https://github.com/gatsbyjs/gatsby/blob/master/packages/babel-preset-gatsby/src/dependencies.ts
   */

  // if (config.module?.rules) {
  //   reporter.info(`[${pluginOptions.pluginName}]removing built-in rules for js/mjs/jsx`);
  //   config.module.rules = [
  //     // ...config.module.rules.filter(negateBabelLoaderPredicate),
  //     {
  //       ...getBabelReactLoader({ hmr: isDevelopStage }),
  //       test: /\.[jt]sx?$/,
  //       // whitelist specific es6 modules
  //       exclude: (modulePath: string) =>
  //         /node_modules/.test(modulePath) &&
  //         !new RegExp(
  //           `[\\\\/](${moduleToParseByBabel
  //             .map((module) => module.replace(/\//, path.sep))
  //             .map(regexEscape)
  //             .join('|')})[\\\\/]`
  //         ).test(modulePath),
  //     },
  //   ];
  // }

  /**
   * Add tsx support with ts-loader
   */
  if (config.module?.rules) {
    (config.module.rules as RuleSetRule[]) = [
      ...(config.module.rules as RuleSetRule[]).filter(negateTsLoaderPredicate),
      getTypescriptBabelReactLoader({
        isDevelopment: isDevelopStage,
        tsLoaderOptions: {
          projectReferences: false,
        },
        babelPlugins: [['@vanilla-extract/babel-plugin']],
      }),
    ] as RuleSetRule[];

    config.plugins?.push(getForkTsCheckerWebpackPlugin());

    // can be used to counter tsc emitting all files again but it's slower for the first webpack build
    // config.snapshot = {
    //   module: {
    //     timestamp: true,
    //     hash: true,
    //   },
    // };
  }

  // add tsconfig path to webpack aliases
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve?.alias,
    },
    extensions: ['.js', '.json', '.wasm', '.ts', '.jsx', '.tsx'],
    plugins: [
      ...(config.resolve?.plugins || []),
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
        logLevel: 'INFO',
        logInfoToStdOut: true,
        extensions: ['.js', '.json', '.wasm', '.ts', '.jsx', '.tsx'],
      }),
    ],
  };

  /**
   * Avoid parsing react and react-dom
   */
  // config.module = {
  //   ...config.module,
  //   noParse: /node_modules\/(react|react-dom)\//,
  // };

  /**
   * Add BundleVisualizer when building for production but local only
   */
  if (isProduction && env.APP_ENV === DEPLOY_ENV.LOCAL) {
    config.plugins = config.plugins
      ? [...config.plugins, getBundleVisualizerPlugin()]
      : [getBundleVisualizerPlugin()];
  }

  reporter.info(`[${pluginOptions.pluginName}] replacing webpack config with modified one`);

  // completely replace the webpack config with the modified one
  actions.replaceWebpackConfig(config);
};
