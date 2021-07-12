// @ts-ignore
import CompressionPlugin from 'compression-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';

export const compressionPlugin: WebpackPluginInstance = new CompressionPlugin({
  test: /\.(js|css)$/,
});
