import { RuleSetRule } from 'webpack';

import { babelPluginBrowserConf } from '../babel/babel-plugins.conf.js';
import {
  babelPresetBrowserConf,
  babelTypeScriptPresetBrowserConf,
} from '../babel/babel-preset.conf.js';
import { isDevelopment } from '../utilities/webpack-dev-server.utilities.js';

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
            ? [
                ['react-refresh/babel', { skipEnvCheck: true }],
                ...babelPluginBrowserConf,
                ...(options.plugins || []),
              ]
            : [...babelPluginBrowserConf, ...(options.plugins || [])],
          presets: [...babelTypeScriptPresetBrowserConf, ...babelPresetBrowserConf],
        },
      },
    ],
  };
}
