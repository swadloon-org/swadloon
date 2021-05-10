import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';

const TerserPlugin = require('terser-webpack-plugin');
/**
 * @see https://github.com/webpack-contrib/terser-webpack-plugin#options
 * @see https://github.com/terser-js/terser#minify-options
 */
export const terserPlugin: WebpackPluginInstance = new TerserPlugin({
  cache: true,
  terserOptions: {
    compress: {
      side_effects: false,
    },
    ecma: undefined,
    comments: false,
    warnings: false,
    mangle: true,
    module: false,
    ie8: false,
    keep_classnames: false,
    keep_fnames: false,
    safari10: true,
  },
  sourceMap: true,
  parallel: true,
  extractComments: false,
});
