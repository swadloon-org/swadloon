import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const getBundleVisualizerPlugin: WebpackPluginInstance = new BundleAnalyzerPlugin({
  reportFilename: './webpack-bundle-stats.html',
  analyzerMode: 'static',
  openAnalyzer: false,
});
