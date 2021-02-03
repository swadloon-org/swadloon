import { StatsWriterPlugin } from 'webpack-stats-plugin';
import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';

/**
 * @see https://github.com/FormidableLabs/webpack-stats-plugin#readme
 */
export const getWebpackStatsPlugin: () => WebpackPluginInstance = () => new StatsWriterPlugin({});
