const scssLoaderConfig = require('./scss-loader.config');
const _ = require('lodash');
const defaultGetLocalIdent = require('css-loader/lib/getLocalIdent');
const cssLoader = require('./css-loader');

module.exports = {
  test: /\.(scss)$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      ...cssLoader,
      query: {
        ...cssLoader.query,
        importLoaders: scssLoaderConfig.length,
      },
    },
    ...scssLoaderConfig,
  ],
};
