const HtmlWebpackPlugin = require('html-webpack-plugin');

const utilities = require('../utilities/utilities');
const configPaths = require('../../config-paths');

const minifyHtmlOptions = {
  prod: {
    removeComments: true,
    collapseWhitespace: true,
  },
  dev: false,
};

const env = process.env.APP_ENV ? process.env.APP_ENV : 'dev';

const htmlIndex = new HtmlWebpackPlugin({
  template: configPaths.clientIndex,
  chunks: ['index'],
  inject: false,
  cache: false,
  hash: false,
  isDevServer: utilities.isWebpackDevServer(),
  env,
  minify: utilities.isWebpackDevServer() ? false : minifyHtmlOptions.prod,
});

module.exports = {
  dev: [
    htmlIndex,
    new HtmlWebpackPlugin({
      template: configPaths.clientIndexShell,
      filename: 'index-shell.html',
      chunks: ['index-shell'],
      inject: true,
      cache: false,
      hash: false,
      isDevServer: utilities.isWebpackDevServer(),
      env,
      minify: false,
    }),
  ],
  prod: [htmlIndex],
};
