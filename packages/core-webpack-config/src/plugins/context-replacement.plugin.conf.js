const webpack = require('webpack');

module.exports = new webpack.ContextReplacementPlugin(/moment[\\\/]locale/, /^\.\/(en)$/);
