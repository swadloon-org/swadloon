import { DEPLOY_ENV } from '@newrade/core-common';
import { CommonEnvType } from '@newrade/core-utils';
import * as core from '@newrade/core-webpack-config';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import regexEscape from 'regex-escape';
import { RuleSetRule, RuleSetUseItem, Configuration } from 'webpack';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

/**
 *
 * @see 'node_modules/gatsby/dist/utils/webpack.config.js'
 */
export const onCreateWebpackConfigFunction: GatsbyNode['onCreateWebpackConfig'] = (
  { stage, rules, loaders, plugins, actions, getConfig, reporter },
  options
) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;
  const moduleToParseByBabel = [
    'gatsby-plugin-image',
    ...(pluginOptions.modules ? pluginOptions.modules : []),
  ];
  const env = process.env as CommonEnvType;
  const isProduction = stage !== `develop`;

  if (stage !== `build-javascript`) {
    return void 0;
  }

  /**
   * Retrieve the initial gatsby webpack config
   */
  const config = getConfig() as Configuration;

  if (!config) {
    return void 0;
  }

  if (isDevelopSSRStage || isSSRStage) {
    return void 0;
  }

  reporter.info(
    `[${pluginOptions.pluginName}]process.env.TS_NODE_PROJECT: ${process.env.TS_NODE_PROJECT}`
  );
  delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

  /**
   * Replace the devtool option
   */
  // config.devtool = 'cheap-source-map';

  /**
   * Enable `module` in mainfields
   */
  if (typeof config === 'object') {
    config.resolve = {
      ...config.resolve,
      mainFields: ['browser', 'module', 'main'],
    };
  }

  /**
   * Custom settings for watchOptions
   */
  if (typeof config === 'object') {
    config.watchOptions = {
      ...config.watchOptions,
      aggregateTimeout: 400,
    };
  }

  /**
   * Configure stats for webpack
   */
  if (typeof config === 'object' && env.APP_ENV === DEPLOY_ENV.LOCAL) {
    config.stats = {
      ...(typeof config.stats === 'object' ? config.stats : {}),
      ...core.stats.dev,
    };

    config.plugins?.push(core.getWebpackStatsPlugin());
  }

  /**
   * Add lodash plugin
   */
  if (typeof config === 'object') {
    config.plugins?.push(core.getLodashPlugin());
  }
  if (typeof config === 'object') {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve && typeof config.resolve.alias === 'object' ? config.resolve.alias : {}),
        lodash: 'lodash-es',
      },
    };
  }

  /**
   * Alias for core-js
   *
   * This is needed since gatsby uses only core-js and not the pure version
   */
  if (typeof config === 'object') {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve && typeof config.resolve.alias === 'object' ? config.resolve.alias : {}),
        'core-js-pure': 'core-js',
      },
    };
  }

  /**
   * Replace Gatsby default entry polyfill
   */
  if (
    typeof config === 'object' &&
    config.entry &&
    (config.entry as Record<string, string>)['polyfill']
  ) {
    delete (config.entry as Record<string, string>)['polyfill'];
  }

  /**
   * Redefine optimization
   */
  if (typeof config === 'object') {
    config.optimization = {
      ...config.optimization,
      ...{
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
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
            prism: {
              name: 'prism',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](prism).*[\\/]/,
            },
            react: {
              name: 'react',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            'react-icons': {
              name: 'react-icons',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](@react-icons|react-icons)[\\/]/,
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
  const negateBabelLoaderPredicate = (rule: RuleSetRule | '...') =>
    !babelLoaderPredicate(rule as RuleSetRule);
  const tsLoaderPredicate = (rule: RuleSetRule) => String(rule.test) === '/\\.tsx?$/';
  const negateTsLoaderPredicate = (rule: RuleSetRule) => !tsLoaderPredicate(rule);
  if (config.module?.rules) {
    const [gatsbyBabelLoaderConf] = (config.module.rules as RuleSetRule[]).filter(
      babelLoaderPredicate
    );

    config.module.rules = [
      ...config.module.rules.filter(negateBabelLoaderPredicate),
      {
        ...(gatsbyBabelLoaderConf as RuleSetRule),
        use: [
          {
            ...((gatsbyBabelLoaderConf as RuleSetRule).use as any)[0],
            options: {
              ...((gatsbyBabelLoaderConf as RuleSetRule).use as any)[0].options,
              ...(core.babelReactLoader.use as any)[0].options,
            },
          },
        ],
        exclude: (modulePath: string) =>
          /node_modules/.test(modulePath) &&
          // whitelist specific es6 module
          !new RegExp(
            `[\\\\/](${moduleToParseByBabel
              .map((module) => module.replace(/\//, path.sep))
              .map(regexEscape)
              .join('|')})[\\\\/]`
          ).test(modulePath),
      },
    ];

    const [modifiedGatsbyBabelLoaderConf] = (config.module.rules as RuleSetRule[]).filter(
      babelLoaderPredicate
    );
  }

  /**
   * Replace gatsby-ts-plugin options
   */
  if (config.module?.rules) {
    const [tsLoaderConf] = (config.module.rules as RuleSetRule[]).filter(tsLoaderPredicate);

    if (tsLoaderConf && tsLoaderConf.use && (tsLoaderConf.use as RuleSetUseItem[]).length) {
      const [gatsbyBabelLoaderConf] = (config.module.rules as RuleSetRule[]).filter(
        babelLoaderPredicate
      );
      const [tsLoaderUseConf] = (tsLoaderConf.use as RuleSetUseItem[]).filter(
        (use: any) => !/babel-loader/.test(use.loader)
      );

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
   * Add tsx support to babel (like gatsby-plugin-typescript)
   */
  if (config.module?.rules) {
    const [gatsbyBabelLoaderConf] = (config.module.rules as RuleSetRule[]).filter(
      babelLoaderPredicate
    );

    (config.module.rules as RuleSetRule[]) = [
      ...(config.module.rules as RuleSetRule[]).filter(negateTsLoaderPredicate),
      {
        ...getTypescriptBabelReactLoader({
          isDevelopment: isDevelopStage,
          tsLoaderOptions: {
            projectReferences: true,
            transpileOnly: true, // typechecking done by fork-ts-plugin
            logLevel: 'INFO',
          },
        }),
        exclude: /public|static|node_modules|treat\.ts/,
      },
    ] as RuleSetRule[];

    const [modifiedTsLoaderConf] = (config.module.rules as RuleSetRule[]).filter(tsLoaderPredicate);
  }

  config.resolve = {
    ...config.resolve,
    plugins: [
      ...(config.resolve?.plugins || []),
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
        logLevel: 'INFO',
      }),
    ],
  };

  /**
   * Add BundleVisualizer when building for production but local only
   */
  if (isProduction && env.APP_ENV === DEPLOY_ENV.LOCAL) {
    config.plugins = config.plugins
      ? [...config.plugins, core.getBundleVisualizerPlugin()]
      : [core.getBundleVisualizerPlugin()];
  }

  reporter.info(`[${pluginOptions.pluginName}]replacing webpack config with modified one`);

  // completely replace the webpack config with the modified one
  actions.replaceWebpackConfig(config);
};
