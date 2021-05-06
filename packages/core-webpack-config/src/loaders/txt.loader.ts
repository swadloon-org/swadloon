import { RuleSetRule } from 'webpack/declarations/WebpackOptions';

export const txtLoader: RuleSetRule = {
  test: /\.(txt)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'assets/[name].[hash].[ext]',
    },
  },
};
