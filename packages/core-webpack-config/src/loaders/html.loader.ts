import { RuleSetRule } from 'webpack/declarations/WebpackOptions';

export const htmlLoader: RuleSetRule = {
  test: /\.(html|xml|ejs)$/,
  use: {
    loader: 'ejs-loader',
  },
};
