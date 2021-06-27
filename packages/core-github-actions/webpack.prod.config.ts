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
    ['remove-ts-build-cache']: path.resolve(__dirname, 'src/remove-ts-build-cache/index.ts'),
    ['set-app-env']: path.resolve(__dirname, 'src/set-app-env/index.ts'),
    ['check-workflow-status']: path.resolve(__dirname, 'src/check-workflow-status/index.ts'),
    ['vercel-rewrites']: path.resolve(__dirname, 'src/vercel-rewrites/index.ts'),
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
              configFile: 'tsconfig.build.json',
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
    extensions: ['.tsx', '.ts', '.js', '.mjs'],
    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.build.json',
        logLevel: 'WARN',
      }),
    ],
  },
  output: {
    filename: `[name]/index.js`,
    path: path.join(__dirname, 'built'),
    libraryTarget: 'umd',
  },
  plugins: [
    core.getWebpackCleanPlugin(),
    core.getWebpackCopyPlugin({
      patterns: [
        { from: 'src/remove-ts-build-cache/action.yml', to: 'remove-ts-build-cache/' },
        { from: 'src/set-app-env/action.yml', to: 'set-app-env/' },
        { from: 'src/check-workflow-status/action.yml', to: 'check-workflow-status/' },
        { from: 'src/cache-build/action.yml', to: 'cache-build/' },
        { from: 'src/vercel-rewrites/action.yml', to: 'vercel-rewrites/' },
      ],
    }),
  ],
  // https://codeburst.io/use-webpack-with-dirname-correctly-4cad3b265a92
  node: {
    __dirname: false,
  },
};

export default config;
