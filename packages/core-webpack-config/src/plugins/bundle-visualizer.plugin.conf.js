const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const utilities = require('../utilities/utilities');

module.exports = {
  app: new BundleAnalyzerPlugin({
    reportFilename: './webpack-bundle-stats.html',
    analyzerMode: 'static',
    openAnalyzer: false,
  }),
  vendor: new BundleAnalyzerPlugin({
    reportFilename: './webpack-bundle-stats-vendor.html',
    analyzerMode: 'static',
    openAnalyzer: false,
  }),
  polyfills: new BundleAnalyzerPlugin({
    reportFilename: './webpack-bundle-stats-polyfills.html',
    analyzerMode: 'static',
    openAnalyzer: false,
  }),
  vendordev: new BundleAnalyzerPlugin({
    reportFilename: './webpack-bundle-stats-vendor-dev.html',
    analyzerMode: 'static',
    openAnalyzer: false,
  }),
};
