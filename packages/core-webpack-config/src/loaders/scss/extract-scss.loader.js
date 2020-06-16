const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scssLoaderConfig = require('./scss-loader.config');

module.exports = {
  test: /\.(scss)$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      query: {
        modules: true,
        importLoaders: scssLoaderConfig.length,
        localIdentName: '[name][local]',
        camelCase: true, // see postcss config
      },
    },
    ...scssLoaderConfig,
  ],
};
