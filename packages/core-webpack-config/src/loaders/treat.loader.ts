import { RuleSetRule } from 'webpack';

import { babelPluginBrowserConf } from '../babel/babel-plugins.conf';
import { babelPresetBrowserConf } from '../babel/babel-preset.conf';
import { isDevelopment } from '../utilities/webpack-dev-server.utilities';

type Options = { hmr?: boolean; plugins?: string[][] };

const defaultOptions: Options = {
  hmr: isDevelopment(),
  plugins: [['babel-plugin-treat']],
};

/**
 * @see https://seek-oss.github.io/treat/setup#webpack-setup
 * @see https://seek-oss.github.io/treat/setup/#babel-setup
 */
export function getTreatLoader(options: Options = defaultOptions): RuleSetRule {
  return {
    test: /\.treat\.(j|t)s$/,
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
