import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
import { svgoConfig } from './svgo.conf';

/**
 * @see https://github.com/gregberge/svgr
 */
export const svgLoader: RuleSetRule = {
  test: /\.(svg)$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        native: false,
        ref: true,
        svgoConfig,
      },
    },
  ],
};
