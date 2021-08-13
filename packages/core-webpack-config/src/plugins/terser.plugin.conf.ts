import { WebpackPluginInstance } from 'webpack';
import type * as Terser from 'terser-webpack-plugin/types';
// @ts-ignore
import TerserPlugin from 'terser-webpack-plugin';

export const terserOptions: Terser.TerserPluginOptions = {
  terserOptions: {
    compress: {
      side_effects: true,
    },
    ecma: undefined,
    warnings: false,
    mangle: true,
    module: false,
    keep_classnames: false,
    keep_fnames: false,
    ie8: false,
    safari10: true,
    format: {
      comments: false,
    },
  },
  parallel: true,
  extractComments: false,
};

/**
 * @see https://github.com/webpack-contrib/terser-webpack-plugin#options
 * @see https://github.com/terser-js/terser#minify-options
 */
export const terserPlugin: WebpackPluginInstance = new TerserPlugin(terserOptions);
