import { WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

type BundleAnalyzerPluginOptions = {
  analyzerMode: 'server' | 'static';
  analyzerPort?: number;
  reportFilename?: './webpack-bundle-stats.html';
  openAnalyzer?: boolean;
};

const defaultOptions: BundleAnalyzerPluginOptions = {
  reportFilename: './webpack-bundle-stats.html',
  analyzerMode: 'static',
  analyzerPort: 3001,
  openAnalyzer: false,
};

/**
 * @see https://github.com/webpack-contrib/webpack-bundle-analyzer
 */
export const getBundleVisualizerPlugin: (
  options?: BundleAnalyzerPluginOptions
) => WebpackPluginInstance = (options) =>
  new BundleAnalyzerPlugin({
    ...defaultOptions,
    ...options,
  });
