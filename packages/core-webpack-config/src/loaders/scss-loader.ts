import { RuleSetUse } from 'webpack/declarations/WebpackOptions';

export const scssLoader: RuleSetUse = {
  loader: 'sass-loader',
  query: {
    sourceMap: true,
    sourceComments: true,
  },
};
