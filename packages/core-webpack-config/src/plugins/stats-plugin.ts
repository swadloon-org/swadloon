import { WebpackPluginInstance } from 'webpack';
import { StatsWriterPlugin } from 'webpack-stats-plugin';

/**
 * @see https://github.com/FormidableLabs/webpack-stats-plugin#readme
 */
export const getWebpackStatsPlugin: () => WebpackPluginInstance = () => new StatsWriterPlugin({});
