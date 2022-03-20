import { GatsbyNode } from 'gatsby';

// @ts-ignore
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import { Configuration, ProgressPlugin, RuleSetRule } from 'webpack';

import { DEPLOY_ENV } from '@newrade/core-common';
import { CommonEnvType } from '@newrade/core-node-utils';
import {
  devServerConfig,
  getBundleVisualizerPlugin,
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

  reporter.info(`[${pluginOptions.pluginName}] stage: ${stage}`);

  /**
   *
   * Prepare env and gatsby stage information
   *
   */

  //   1) develop: for `gatsby develop` command, hot reload and CSS injection into page
  //   2) develop-html: same as develop without react-hmre in the babel config for html renderer
  //   3) build-javascript: Build JS and CSS chunks for production
  //   4) build-html: build all HTML files

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

    //
    // TODO test for next release
    //

    // config.module.rules.push({
    //   test: /\.tsx?$/,
    //   loader: 'esbuild-loader',
    //   options: {
    //     loader: 'tsx', // Or 'ts' if you don't need tsx
    //     target: 'es2015',
    //   },
    // });
  }

  if (config.module?.rules) {
    /**
     * Add support for react-icons
     */
    config.module.rules.push({
      test: /\.js$/,
      include: /react-icons/,
      use: jsLoader,
    });
  }

  /**
   *
   * Add type checking with fork-ts-checker-webpack-plugin
   *
   */
  if (isBuildJavaScriptStage) {
    reporter.info(`[${pluginOptions.pluginName}] adding fork-ts-checker-webpack-plugin`);
    config.plugins?.push(getForkTsCheckerWebpackPlugin());
  }

  /**
   *
   * Updating resolve, aliases, plugins and etc.
   *
   */

  /**
   * Add webpack stats plugin in production
   */
  if (isProduction && isBuildJavaScriptStage) {
    config.plugins?.push(getWebpackStatsPlugin());
  }

  /**
   * Add SizePlugin, only for production
   */
  if (isProduction && isBuildJavaScriptStage) {
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
   * Add webpack-bundle-analyzer only for local production build
   */
  if (isProduction && isBuildJavaScriptStage && env.APP_ENV === DEPLOY_ENV.LOCAL) {
    reporter.info(`[${pluginOptions.pluginName}] adding webpack-bundle-analyzer plugin`);
    config.plugins = [
      ...(config.plugins || []),
      getBundleVisualizerPlugin({
        // analyzerMode: isProduction ? 'static' : 'server',
        analyzerMode: 'static',
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
