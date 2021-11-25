import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';
/**
 * @see https://www.npmjs.com/package/clean-webpack-plugin
 */
export const getWebpackCleanPlugin: () => WebpackPluginInstance = () => new CleanWebpackPlugin();
