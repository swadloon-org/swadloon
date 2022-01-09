/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools

import { Configuration, WebpackOptionsNormalized } from 'webpack';
import merge from 'webpack-merge';

import * as core from '@newrade/core-webpack-config';
import { devServerConfig } from '@newrade/core-webpack-config';

import { commonConfig, env } from './webpack.common.config';

const devConfig: Configuration & Pick<WebpackOptionsNormalized, 'devServer'> = {
  mode: 'development',
  watchOptions: devServerConfig.watchOptions,
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: env.APP_PORT,
    proxy: {
      // '/api': 'http://localhost:10003',
    },
    historyApiFallback: {
      index: '/',
    },
  },
  plugins: [],
  stats: core.stats.dev,
  output: core.output.dev,
};

const config = merge(commonConfig, devConfig);

export default config;
