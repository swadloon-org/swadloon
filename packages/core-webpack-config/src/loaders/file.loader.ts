import { RuleSetRule } from 'webpack';

export const fileLoader: RuleSetRule = {
  test: /\.((ttf|eot|woff2?)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff2?|jpe?g|png|gif|ico)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'assets/[name].[contenthash].[ext]',
    },
  },
};
