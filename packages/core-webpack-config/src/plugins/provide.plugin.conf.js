const webpack = require('webpack');
const reactRouterDom = require('react-router-dom');

module.exports.fetch = 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch';

module.exports = new webpack.ProvidePlugin({
  fetch: module.exports.fetch,
  ReactRouterDom: reactRouterDom,
});
