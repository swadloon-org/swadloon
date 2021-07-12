import { RuleSetRule } from 'webpack';

export const urlLoader: RuleSetRule = {
  test: /\.((svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(ico)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 100000,
      name: 'assets/[name].[hash].[ext]',
    },
  },
};
