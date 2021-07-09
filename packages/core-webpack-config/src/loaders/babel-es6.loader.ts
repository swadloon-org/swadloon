import path from 'path';
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import { babelPluginBrowserConf } from '../babel-plugins.conf';
import { babelPresetBrowserConf } from '../babel-preset.conf';

export const babelReactRule: RuleSetUseItem = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    plugins: [...babelPluginBrowserConf],
    presets: [...babelPresetBrowserConf],
  },
};

/**
 * @see https://webpack.js.org/loaders/babel-loader/
 */
export const babelReactLoader: RuleSetRule = {
  test: /\.(m?jsx?)$/,
  use: [babelReactRule],
  include: [/core-react-ui/, path.resolve('src/**/*')],
};
