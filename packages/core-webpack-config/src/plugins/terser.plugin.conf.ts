import { WebpackPluginInstance } from 'webpack';
import type * as Terser from 'terser-webpack-plugin/types';
// @ts-ignore
import TerserPlugin from 'terser-webpack-plugin';

/**
 * @see https://github.com/webpack-contrib/terser-webpack-plugin#options
 * @see https://github.com/terser-js/terser#minify-options
 */
export const terserPlugin: WebpackPluginInstance = new TerserPlugin({
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
  parallel: true,
  extractComments: false,
} as Terser.TerserPluginOptions);
