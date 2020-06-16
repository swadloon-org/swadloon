const webpack = require('webpack');

module.exports = {
  dev: new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: true,
  }),
  prod: new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
};
