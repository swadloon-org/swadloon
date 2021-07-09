import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { WebpackPluginInstance } from 'webpack';

export const getBundleVisualizerPlugin: () => WebpackPluginInstance = () =>
  new BundleAnalyzerPlugin({
    reportFilename: './webpack-bundle-stats.html',
    analyzerMode: 'static',
    openAnalyzer: false,
  });
