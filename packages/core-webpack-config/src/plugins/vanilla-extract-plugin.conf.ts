import { WebpackPluginInstance } from 'webpack';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

/**
 * Vanilla Webpack Plugin
 * @see https://github.com/seek-oss/vanilla-extract
 * @see https://github.com/seek-oss/vanilla-extract/tree/master/packages/webpack-plugin
 */
export const getVanillaExtractPlugin: () => WebpackPluginInstance = function () {
  return new VanillaExtractPlugin();
};
