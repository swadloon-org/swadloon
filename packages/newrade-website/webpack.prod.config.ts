/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

import dotenv from 'dotenv';
import path from 'path';
import * as tsloader from 'ts-loader';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as core from '@newrade/core-webpack-config';
import WebpackOptions from 'webpack/declarations/WebpackOptions';

dotenv.config();

const config: WebpackOptions.WebpackOptions = {
  mode: 'production',
  target: 'node',
  entry: {
    ['test']: path.resolve(__dirname, 'api/test.ts'),
  },
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig-functions.build.json',
              logLevel: 'WARN',
              projectReferences: true,
            } as Partial<tsloader.Options>,
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
        include: [path.resolve('src/**/*'), path.resolve('../**/*')],
      },
    ],
  },
  resolve: {
    mainFields: ['main', 'module'],
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.build.json',
        logLevel: 'WARN',
      }),
    ],
  },
  output: {
    filename: `[name].js`,
    path: path.join(__dirname, 'public', 'api'),
    libraryTarget: 'umd',
  },
  plugins: [
    core.getWebpackCleanPlugin(),
    // core.getWebpackCopyPlugin({}),
  ],
  // https://codeburst.io/use-webpack-with-dirname-correctly-4cad3b265a92
  node: {
    __dirname: false,
  },
};

export default config;
