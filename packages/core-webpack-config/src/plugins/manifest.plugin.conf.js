var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = new ManifestPlugin({
  fileName: 'webpack-manifest.json',
});
