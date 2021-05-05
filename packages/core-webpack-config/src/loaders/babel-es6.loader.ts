import path from 'path';
import { RuleSetRule, RuleSetUseItem } from 'webpack/declarations/WebpackOptions';
import { babelPluginConf } from '../babel-plugins.conf';
import { babelPresetConf } from '../babel-preset.conf';

export const es6BabelRule: RuleSetUseItem = {
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
export const es6BabelLoader: RuleSetRule = {
  test: /\.(m?jsx?)$/,
  use: [es6BabelRule],
  include: path.resolve('src/**/*'),
};
