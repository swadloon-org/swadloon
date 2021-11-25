import { RuleSetRule } from 'webpack';

import { babelPluginBrowserConf } from '../babel/babel-plugins.conf';
import { babelPresetBrowserConf } from '../babel/babel-preset.conf';
import { isDevelopment } from '../utilities/webpack-dev-server.utilities';

type Options = { hmr?: boolean; plugins?: string[][] };

const defaultOptions: Options = {
  hmr: isDevelopment(),
};

/**
 * @see https://github.com/evenchange4/svgr.macro
 * @see https://github.com/kentcdodds/babel-plugin-macros
 */
export function getSvgMacroLoader(options: Options = defaultOptions): RuleSetRule {
  return {
    test: /\.svg\.(j|t)sx$/,
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
  };
}
