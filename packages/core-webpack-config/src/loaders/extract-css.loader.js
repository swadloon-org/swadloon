const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postCssLoader = require('../post-css/post-css.loader');

module.exports = {
  test: /\.(css)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      query: {},
    },
    postCssLoader,
  ],
};
