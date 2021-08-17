import path from 'path';
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import { babelPluginBrowserConf } from '../babel-plugins.conf';
import { babelPresetBrowserConf } from '../babel-preset.conf';

export const babelReactRule: RuleSetUseItem = {
  loader: 'babel-loader',
  options: {
    sourceType: `unambiguous`,
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
};
<<<<<<< HEAD
=======

type Options = { hmr?: boolean };

const defaultOptions: Options = {
  hmr: isDevelopment(),
};

/**
 * for babel-loader see
 * for react-refresh see https://github.com/pmmmwh/react-refresh-webpack-plugin
 */
export function getBabelReactLoader(options: Options = defaultOptions): RuleSetRule {
  return {
    test: /\.jsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          plugins: options.hmr
            ? [['react-refresh/babel'], ...babelPluginBrowserConf]
            : [...babelPluginBrowserConf],
          presets: [...babelPresetBrowserConf],
        },
      },
    ],
    exclude: /node_modules/,
  };
}
>>>>>>> 058d3f73 (fix(core): fix babel loader config)
