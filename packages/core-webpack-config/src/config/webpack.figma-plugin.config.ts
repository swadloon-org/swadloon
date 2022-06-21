import { Configuration } from 'webpack';

import { getBabelTypescriptReactLoader } from '../loaders/babel-react.loader.js';
import { extractCssLoader, extractVanillaCssLibLoader } from '../loaders/extract-css.loader.js';
import { htmlLoader } from '../loaders/html.loader.js';
import { inlineCssLoader, inlineVanillaCssLibLoader } from '../loaders/inline-css.loader.js';
import { svgLoader } from '../loaders/svg.loader.js';
import { stats } from '../other/stats.conf.js';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin.js';
import { getMiniCssCleanupPlugin } from '../plugins/mini-css-extract-cleanup.conf.js';
import { getMiniCSSExtractPlugin } from '../plugins/mini-css-extract-plugin.conf.js';
import { getVanillaExtractPlugin } from '../plugins/vanilla-extract-plugin.conf.js';

/**
 * Config to build a Figma plugin
 * @see https://www.figma.com/plugin-docs/intro/
 * @see https://github.com/figma/plugin-samples
 * @see https://github.com/figma/plugin-samples/tree/master/webpack-react
 */
export const getFigmaPluginConfig: (options: { isDevelopment: boolean }) => Configuration = ({
  isDevelopment,
}) => {
  return {
    mode: 'production',
    target: 'web',
    externals: [],
    cache: isDevelopment
      ? {
          type: 'memory',
        }
      : {
          type: 'filesystem',
        },
    devtool: 'inline-source-map',
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        svgLoader,
        htmlLoader,
        extractCssLoader,
        extractVanillaCssLibLoader,
        getBabelTypescriptReactLoader(),
      ],
    },
    resolve: {
      mainFields: ['browser', 'module', 'main'],
      extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    stats: stats.prod,
    // see https://github.com/webpack/webpack/issues/1576
    ignoreWarnings: [/^(?!CriticalDependenciesWarning$)/],

    plugins: [
      /**
       * CSS
       */
      getVanillaExtractPlugin(),
      getMiniCSSExtractPlugin({ filename: '[name].css' }),
      /**
       * Others
       */
      getWebpackCleanPlugin(),
    ],
    resolveLoader: {
      alias: {
        'ejs-loader': '@newrade/core-webpack-config/ejs-loader',
      },
    },
  };
};
