/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools

import path from 'path';

import * as tsloader from 'ts-loader';
import { Configuration } from 'webpack';

import * as core from '@newrade/core-webpack-config';

const config: Configuration = {
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
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              logLevel: 'INFO',
              projectReferences: false,
            } as Partial<tsloader.Options>,
          },
        ],
      },
    ],
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.tsx', '.ts', '.js', '.mjs'],
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
