import * as tsloader from 'ts-loader';
import { ModuleKind } from 'typescript';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

import { babelNodeLoader, babelNodeRule } from '../loaders/babel-node.loader.js';
import { htmlLoader } from '../loaders/html.loader.js';
import { svgLoader } from '../loaders/svg.loader.js';
import { stats } from '../other/stats.conf.js';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin.js';

/**
 * Config to bundle libs to a single bundle (CommonJS)
 */
export const nodeLibConfig: Configuration = {
  target: 'node',
  // https://codeburst.io/use-webpack-with-dirname-correctly-4cad3b265a92
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      svgLoader,
      htmlLoader,
      /**
       * @see https://www.npmjs.com/package/node-loader
       */
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
      babelNodeLoader,
      {
        test: /\.tsx?$/,
        use: [
          babelNodeRule,
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              logLevel: 'WARN',
              projectReferences: true,
              compilerOptions: {
                module: ModuleKind.CommonJS,
              },
            } as Partial<tsloader.Options>,
          },
        ],
      },
    ],
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.js', '.json', '.wasm', '.ts', '.tsx', '.jsx'],
  },
  stats: stats.prod,
  // see https://github.com/webpack/webpack/issues/1576
  ignoreWarnings: [/^(?!CriticalDependenciesWarning$)/],
  plugins: [getWebpackCleanPlugin()],
};
