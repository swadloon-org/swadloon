import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const bundleVisualizerPlugin: WebpackPluginInstance = new BundleAnalyzerPlugin({
  reportFilename: './webpack-bundle-stats.html',
  analyzerMode: 'static',
  openAnalyzer: false,
});
