import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
import { babelPluginConf } from '../babel-plugins.conf';
import { babelPresetConf } from '../babel-preset.conf';

export const es6BabelLoader: RuleSetRule = {
  test: /\.(m?jsx?)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [...babelPluginConf],
        presets: [...babelPresetConf],
      },
    },
  ],
};
