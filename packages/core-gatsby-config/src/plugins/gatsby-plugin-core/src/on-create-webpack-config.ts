import { GatsbyNode } from 'gatsby';

// @ts-ignore
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import { Configuration, ProgressPlugin, RuleSetRule } from 'webpack';

import { DEPLOY_ENV } from '@newrade/core-common';
import { CommonEnvType } from '@newrade/core-node-utils';
import {
  devServerConfig,
  getForkTsCheckerWebpackPlugin,
  getLodashPlugin,
  getSizePlugin,
  getWebpackStatsPlugin,
  stats,
} from '@newrade/core-webpack-config';

import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

/**
 * Replacement config for Gatsby's default config
 *
 * @see 'node_modules/gatsby/dist/utils/webpack.config.js'
 * @see https://webpack.js.org/configuration/
 */
export const onCreateWebpackConfigFunction: GatsbyNode['onCreateWebpackConfig'] = (
  { stage, rules, loaders, plugins, actions, getConfig, reporter, store },
  options
) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;

  /**
   *
   * Prepare env and gatsby stage information
   *
   */

  const env = process.env as CommonEnvType;
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopStage = stage === 'develop';
  const isDevelopSSRStage = stage === 'develop-html';
  const isBuildJavaScriptStage = stage === 'build-javascript';
  const isSSRStage = stage === 'build-html';

  /**
   * Retrieve the initial gatsby webpack config
   */
  const config = getConfig() as Configuration;

  if (!config) {
    return void 0;
  }

  /**
   * Print out env information
   */
  reporter.info(
    `[${pluginOptions.pluginName}] process.env.TS_NODE_PROJECT: ${process.env.TS_NODE_PROJECT}`
  );
  if (process.env.TS_NODE_PROJECT) {
    delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools
  }

  reporter.info(`[${pluginOptions.pluginName}] NODE_ENV: ${env.NODE_ENV}`);

  /**
   * Replace the devtool option
   *
   * @see https://webpack.js.org/configuration/devtool/#devtool
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
    ...devServerConfig.watchOptions,
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
    config.stats = {
      ...stats.prod,
    };
  }

  /**
   * Add webpack stats plugin in production
   */
  if (isProduction) {
    config.plugins?.push(getWebpackStatsPlugin());
  }

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
   *
   * Add tsx support with babel-loader
   *
   */

  const jsLoader = loaders.js();

  if (config.module?.rules) {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: jsLoader,
    });
  }

  /**
   *
   * Add tsx support with ts-loader
   *
   */

  // const tsLoaderPredicate = (rule: RuleSetRule) => String(rule.test) === '/\\.tsx?$/';
  // const negateTsLoaderPredicate = (rule: RuleSetRule) => !tsLoaderPredicate(rule);

  // if (config.module?.rules) {
  //   reporter.info(`[${pluginOptions.pluginName}] adding .tsx file support`);
  //   reporter.info(`[${pluginOptions.pluginName}] current rules: `);
  //   printOutRules(config.module.rules);

  //   (config.module.rules as RuleSetRule[]) = [
  //     ...(config.module.rules as RuleSetRule[]).filter(negateTsLoaderPredicate),
  //     getBabelReactLoader({
  //       hmr: isDevelopStage,
  //       plugins: [['@vanilla-extract/babel-plugin']],
  //     }),
  //     //
  //     // adding ts-loader and babel increases build times... using babel with the ts preset instead for now
  //     //
  //     // getTypescriptBabelReactLoader({
  //     //   isDevelopment: isDevelopStage,
  //     //   tsLoaderOptions: {
  //     //     projectReferences: false,
  //     //     compilerOptions: {
  //     //       declaration: false,
  //     //       composite: false,
  //     //       incremental: false,
  //     //     },
  //     //   },
  //     //   babelPlugins: [['@vanilla-extract/babel-plugin']],
  //     // }),
  //   ] as RuleSetRule[];

  //   reporter.info(`[${pluginOptions.pluginName}] updated rules:`);
  //   printOutRules(config.module.rules);

  // }

  /**
   *
   * Add type checking with fork-ts-checker-webpack-plugin
   *
   */

  reporter.info(`[${pluginOptions.pluginName}] adding fork-ts-checker-webpack-plugin`);
  config.plugins?.push(getForkTsCheckerWebpackPlugin());

  /**
   *
   * Updating resolve, aliases, plugins and etc.
   *
   */

  // // add tsconfig path to webpack aliases
  // config.resolve = {
  //   ...config.resolve,
  //   alias: {
  //     ...config.resolve?.alias,
  //   },
  //   extensions: ['.js', '.json', '.wasm', '.ts', '.jsx', '.tsx'],
  //   plugins: [
  //     ...(config.resolve?.plugins || []),
  //     new TsconfigPathsPlugin({
  //       configFile: 'tsconfig.json',
  //       logLevel: 'INFO',
  //       logInfoToStdOut: true,
  //       extensions: ['.js', '.json', '.wasm', '.ts', '.jsx', '.tsx'],
  //     }),
  //   ],
  // };

  /**
   * Avoid parsing react and react-dom
   */

  // config.module = {
  //   ...config.module,
  //   noParse: /node_modules\/(react|react-dom)\//,
  // };

  /**
   * Add SizePlugin
   */
  if (isProduction) {
    reporter.info(`[${pluginOptions.pluginName}] adding size-plugin plugin`);
    config.plugins = [...(config.plugins || []), getSizePlugin()];
  }

  /**
   * Add ProgressPlugin, only for development
   */
  if (!isProduction || env.APP_ENV === DEPLOY_ENV.LOCAL) {
    reporter.info(`[${pluginOptions.pluginName}] adding progress plugin`);
    config.plugins = [
      ...(config.plugins || []),
      new ProgressPlugin({
        activeModules: false,
        modules: false,
        dependencies: false,
      }),
    ];
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
   * Add Speed Measure Plugin, only for development
   *
   * NOTE: does not work properly right now, keeping as example
   */
  if (false) {
    // if (!isProduction || env.APP_ENV === DEPLOY_ENV.LOCAL) {
    //   reporter.info(`[${pluginOptions.pluginName}] adding speed-measure-webpack-plugin plugin`);
    //   const smp = new SpeedMeasurePlugin();
    //   const wrappedConfig = smp.wrap(config);
    //   //
    //   // completely replace the webpack config with the wrapped one
    //   //
    //   reporter.info(`[${pluginOptions.pluginName}] replacing webpack config with modified one`);
    //   actions.replaceWebpackConfig(wrappedConfig);
    //   return;
    // }
  }

  //
  // completely replace the webpack config with the modified one
  //
  reporter.info(`[${pluginOptions.pluginName}] replacing webpack config with modified one`);
  actions.replaceWebpackConfig(config);

  /**
   *
   * Utilities below
   *
   */

  function printOutRules(rules: (RuleSetRule | '...')[]) {
    (rules as RuleSetRule[])
      .filter((rule) => !!rule)
      .forEach((rule) => {
        reporter.info(`[${pluginOptions.pluginName}] rule: ${rule.test}, exclude: ${rule.exclude}`);
      });
  }
};
