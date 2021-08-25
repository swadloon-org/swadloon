import path from 'path';
import { RuleSetRule, RuleSetUseItem } from 'webpack';
import { babelPluginBrowserConf } from '../babel/babel-plugins.conf';
import { babelPresetBrowserConf } from '../babel/babel-preset.conf';
import { isDevelopment } from '../utilities/webpack-dev-server.utilities';

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
  test: /\.m?jsx?$/,
  use: [babelReactRule],
};

type Options = { hmr?: boolean; plugins?: string[][] };

const defaultOptions: Options = {
  hmr: isDevelopment(),
  plugins: [],
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
            ? [['react-refresh/babel'], ...babelPluginBrowserConf, ...(options.plugins || [])]
            : [...babelPluginBrowserConf, ...(options.plugins || [])],
          presets: [...babelPresetBrowserConf],
        },
      },
    ],
    exclude: /node_modules|\.treat\.ts/,
  };
}
