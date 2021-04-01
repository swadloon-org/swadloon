import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
/**
 * @see https://www.npmjs.com/package/clean-webpack-plugin
 */
export const getWebpackCleanPlugin: () => WebpackPluginInstance = () => new CleanWebpackPlugin({});
