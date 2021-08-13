import { RuleSetRule } from 'webpack';

export const txtLoader: RuleSetRule = {
  test: /\.(txt)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'assets/[name].[contenthash].[ext]',
    },
  },
};
