import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';

export const getBundleVisualizerPlugin: () => WebpackPluginInstance = () =>
  new BundleAnalyzerPlugin({
    reportFilename: './webpack-bundle-stats.html',
    analyzerMode: 'static',
    openAnalyzer: false,
  });
