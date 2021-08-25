import * as tsloader from 'ts-loader';
import { RuleSetRule } from 'webpack';
import { babelPluginBrowserConf } from '../babel/babel-plugins.conf';
import { babelPresetBrowserConf } from '../babel/babel-preset.conf';
import { isDevelopment } from '../utilities/webpack-dev-server.utilities';
import ReactRefreshTypeScript from 'react-refresh-typescript';

type Options = {
  isDevelopment?: boolean;
  tsLoaderOptions?: Partial<tsloader.Options>;
  babelPlugins?: string[][];
};

const defaultOptions: Options = {
  isDevelopment: isDevelopment(),
};

/**
 * for babel-loader see https://webpack.js.org/loaders/babel-loader/
 * for ts-loader see https://github.com/TypeStrong/ts-loader
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
          cacheCompression: false,
          plugins: [...babelPluginBrowserConf, ...(options.babelPlugins || [])],
          presets: [...babelPresetBrowserConf],
        },
      },
      {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.build.json',
          getCustomTransformers: () => ({
            before: options.isDevelopment ? [ReactRefreshTypeScript()] : [],
          }),
          experimentalFileCaching: true, // https://github.com/TypeStrong/ts-loader#experimentalfilecaching
          projectReferences: options.isDevelopment ? false : true,
          transpileOnly: true, // typechecking done by fork-ts-plugin  see https://github.com/TypeStrong/ts-loader#transpileonly and https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
          allowTsInNodeModules: true,
          experimentalWatchApi: options.isDevelopment ? true : false, // see https://github.com/TypeStrong/ts-loader/issues/1193
          logLevel: 'INFO',
          ...options.tsLoaderOptions,
        } as Partial<tsloader.Options>,
      },
    ],
    exclude: /node_modules|\.treat\.ts|\.svg\.tsx/, // see `treat.loader.ts` and `svgr-macro.loader.ts`
  };
}
