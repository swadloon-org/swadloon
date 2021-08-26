/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools

import path from 'path';
import { getWebpackCleanPlugin } from '@newrade/core-webpack-config';
import { Configuration, DllPlugin, WebpackPluginInstance } from 'webpack';

const config: Configuration = {
  name: 'vendor-react',
  mode: 'production',
  entry: {
    ['react']: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: '[name].dll.js',
    library: {
      name: '[name]',
      type: 'umd',
    },
  },
  target: 'web',
  devtool: 'source-map',
  plugins: [
    getWebpackCleanPlugin(),
    new DllPlugin({
      path: path.resolve(__dirname, 'dll', '[name]-manifest.json'),
      name: 'vendor-[name]_[fullhash]',
    }),
  ].filter(Boolean) as WebpackPluginInstance[],
};

export default config;
