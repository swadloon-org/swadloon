import path from 'path';
import { RuleSetRule, RuleSetUseItem } from 'webpack/declarations/WebpackOptions';
import { babelPluginConf } from '../babel-plugins.conf';
import { babelPresetConf } from '../babel-preset.conf';

export const babelReactRule: RuleSetUseItem = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    plugins: [...babelPluginConf],
    presets: [...babelPresetConf],
  },
};

/**
 * @see https://webpack.js.org/loaders/babel-loader/
 */
export const babelReactLoader: RuleSetRule = {
  test: /\.(m?jsx?)$/,
  use: [babelReactRule],
  include: path.resolve('src/**/*'),
};
