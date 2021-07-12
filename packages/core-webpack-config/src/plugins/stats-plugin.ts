import { StatsWriterPlugin } from 'webpack-stats-plugin';
import { WebpackPluginInstance } from 'webpack';

/**
 * @see https://github.com/FormidableLabs/webpack-stats-plugin#readme
 */
export const getWebpackStatsPlugin: () => WebpackPluginInstance = () => new StatsWriterPlugin({});
