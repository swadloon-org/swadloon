/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

import * as core from '@newrade/core-webpack-config';
import dotenv from 'dotenv';
import path from 'path';
import merge from 'webpack-merge';
import { WebpackOptions } from 'webpack/declarations/WebpackOptions';

dotenv.config();

const localCommonConfig: WebpackOptions = {
  entry: {
    ['server-express']: path.resolve(__dirname, 'src/server-express.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public', 'api'),
    libraryTarget: 'umd',
  },
  plugins: [
    core.getWebpackCopyPlugin({
      patterns: [{ from: 'src/**/*.graphql', to: '[name].[ext]' }],
    }),
  ],
};

export const commonConfig: WebpackOptions = merge(core.nodeCommonConfig, localCommonConfig);
