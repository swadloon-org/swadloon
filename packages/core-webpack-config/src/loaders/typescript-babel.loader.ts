import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
import { babelPluginConf } from '../babel-plugins.conf';
import { babelPresetConf } from '../babel-preset.conf';

export const typescriptBabelReactLoader: RuleSetRule = {
  test: /\.ts(x?)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [...babelPluginConf],
        presets: [...babelPresetConf],
      },
    },
    {
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.build.json',
      },
    },
  ],
};
