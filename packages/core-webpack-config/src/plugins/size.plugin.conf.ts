import SizePlugin from 'size-plugin';
import { WebpackPluginInstance } from 'webpack';

/**
 * @see https://github.com/googlechromelabs/size-plugin
 */
export const getSizePlugin: () => WebpackPluginInstance = () => new SizePlugin({});
