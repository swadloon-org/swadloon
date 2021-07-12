import { RuleSetRule } from 'webpack';

export const htmlLoader: RuleSetRule = {
  test: /\.(html|xml|ejs)$/,
  use: {
    loader: 'ejs-loader',
  },
};
