import CopyWebpackPlugin from 'copy-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';

type CopyWebpackPluginPattern = {
  from: string;
  to: string;
};

type CopyWebpackPluginOptions = {
  patterns: CopyWebpackPluginPattern[];
};

/**
 * @see https://webpack.js.org/plugins/copy-webpack-plugin/
 */
export const getWebpackCopyPlugin: (options: CopyWebpackPluginOptions) => WebpackPluginInstance = (
  options
) => new CopyWebpackPlugin(options);
