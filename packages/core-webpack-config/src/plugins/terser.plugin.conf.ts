import TerserPlugin from 'terser-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';

export const terserOptions: TerserPlugin.BasePluginOptions & {
  terserOptions: TerserPlugin.TerserOptions;
} = {
  terserOptions: {
    compress: {
      side_effects: true,
    },
    ecma: undefined,
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
