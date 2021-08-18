import * as tsloader from 'ts-loader';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import { Configuration } from 'webpack';
import { babelNodeLoader, babelNodeRule } from '../loaders/babel-node.loader';
import { htmlLoader } from '../loaders/html.loader';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin';

/**
 * Preconfigured base config for compiling NodeJS apps
 */
export const nodeCommonConfig: Configuration = {
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
      htmlLoader,
      /**
       * @see https://www.npmjs.com/package/node-loader
       */
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
      /**
       * @see https://github.com/apollographql/graphql-tag#webpack-loading-and-preprocessing
       */
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
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
            } as Partial<tsloader.Options>,
          },
        ],
      },
    ],
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.js', '.json', '.wasm', '.ts', '.tsx', '.jsx', '.css'],
    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
        logLevel: 'WARN',
        mainFields: ['module', 'main'],
        extensions: ['.js', '.json', '.wasm', '.ts', '.tsx', '.jsx', '.css'],
      }),
    ],
  },
  resolveLoader: {
    alias: {
      'ejs-loader': '@newrade/core-webpack-config/lib/loaders/ejs-loader.js',
    },
  },
  stats: {},
  // see https://github.com/webpack/webpack/issues/1576
  ignoreWarnings: [/^(?!CriticalDependenciesWarning$)/],
  plugins: [getWebpackCleanPlugin()],
};
