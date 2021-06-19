import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
import { svgoConfig } from './svgo.conf';

export const svgLoader: RuleSetRule = {
  test: /\.(svg)$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        native: true,
        ref: true,
        svgoConfig,
      },
    },
  ],
};
