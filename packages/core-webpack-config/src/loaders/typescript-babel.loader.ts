import * as tsloader from 'ts-loader';
import { RuleSetRule } from 'webpack/declarations/WebpackOptions';
import { babelPluginConf } from '../babel-plugins.conf';
import { babelPresetConf } from '../babel-preset.conf';
import { isDevelopment } from '../utilities';
import ReactRefreshTypeScript from 'react-refresh-typescript';

type Options = { isDevelopment?: boolean };

const defaultOptions: Options = {
  isDevelopment: isDevelopment(),
};

/**
 *
 * for react-refresh see https://github.com/pmmmwh/react-refresh-webpack-plugin
 */
export function getTypescriptBabelReactLoader(options: Options = defaultOptions): RuleSetRule {
  return {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: options.isDevelopment
            ? [['react-refresh/babel'], ...babelPluginConf]
            : [...babelPluginConf],
          presets: [...babelPresetConf],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.build.json',
          getCustomTransformers: () => ({
            before: options.isDevelopment ? [ReactRefreshTypeScript()] : [],
          }),
          experimentalFileCaching: false,
        } as Partial<tsloader.Options>,
      },
    ],
    exclude: /node_modules/,
  };
}
