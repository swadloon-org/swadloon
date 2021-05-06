/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

import * as core from '@newrade/core-webpack-config';
import merge from 'webpack-merge';
import { commonConfig } from './webpack.common.config';
import WebpackOptions from 'webpack/declarations/WebpackOptions';
import webpack from 'webpack';
import path from 'path';

const devConfig: WebpackOptions.WebpackOptions = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 400,
    ignored: /node_modules|dist/,
  },
  devtool: 'inline-source-map',
  devServer: {
    port: '8001',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  stats: core.stats.dev,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    pathinfo: true,
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[file].map',
    globalObject: 'this',
  },
};

const config = merge(commonConfig, devConfig);

export default config;
