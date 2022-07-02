import MiniCssExtractPlugin, { PluginOptions } from 'mini-css-extract-plugin';
import { WebpackPluginInstance } from 'webpack';

/**
 * MiniCSSExtract Plugin
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin
 */
export const getMiniCSSExtractPlugin: (options?: PluginOptions) => WebpackPluginInstance =
  function (options) {
    return new MiniCssExtractPlugin(options) as WebpackPluginInstance;
  };
