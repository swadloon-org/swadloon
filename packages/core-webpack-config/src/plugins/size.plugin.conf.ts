import SizePlugin from 'size-plugin';
import { WebpackPluginInstance } from 'webpack';

export const getSizePlugin: () => WebpackPluginInstance = () => new SizePlugin({});
