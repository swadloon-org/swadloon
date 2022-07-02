import path from 'path';

import { RuleSetRule, RuleSetUseItem } from 'webpack';

import { babelNodePresetConf } from '../babel/babel-preset.conf.js';

/**
 * Babel loader for NodeJS >v14
 */
export const babelNodeRule: RuleSetUseItem = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [...babelNodePresetConf],
  },
};

/**
 * @see https://webpack.js.org/loaders/babel-loader/
 */
export const babelNodeLoader: RuleSetRule = {
  test: /\.(m?jsx?)$/,
  use: [babelNodeRule],
  include: [path.resolve('src/**/*')],
};
