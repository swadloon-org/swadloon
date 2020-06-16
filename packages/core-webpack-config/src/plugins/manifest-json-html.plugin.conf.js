const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configPaths = require('../../config-paths');

module.exports = new HtmlWebpackPlugin({
  template: path.join(configPaths.clientApp, 'manifest.json.ejs'),
  chunks: [],
  filename: 'manifest.json',
  inject: false,
  hash: false,
  minify: false,
  // csp plugin
  cspPlugin: {
    enabled: false,
  },
});
