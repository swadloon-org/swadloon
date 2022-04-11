import { Configuration } from 'webpack';

import { getBabelTypescriptReactLoader } from '../loaders/babel-react.loader';
import { extractCssLoader, extractVanillaCssLibLoader } from '../loaders/extract-css.loader';
import { htmlLoader } from '../loaders/html.loader';
import { inlineCssLoader, inlineVanillaCssLibLoader } from '../loaders/inline-css.loader';
import { svgLoader } from '../loaders/svg.loader';
import { stats } from '../other/stats.conf';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin';
import { getMiniCssCleanupPlugin } from '../plugins/mini-css-extract-cleanup.conf';
import { getMiniCSSExtractPlugin } from '../plugins/mini-css-extract-plugin.conf';
import { getVanillaExtractPlugin } from '../plugins/vanilla-extract-plugin.conf';

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
      : false,
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
      getMiniCSSExtractPlugin({ filename: '[name].[contenthash:8].css' }),
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
