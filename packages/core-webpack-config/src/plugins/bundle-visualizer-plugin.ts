import { WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const getBundleVisualizerPlugin: () => WebpackPluginInstance = () =>
  new BundleAnalyzerPlugin({
    reportFilename: './webpack-bundle-stats.html',
    analyzerMode: 'static',
    openAnalyzer: false,
  });
