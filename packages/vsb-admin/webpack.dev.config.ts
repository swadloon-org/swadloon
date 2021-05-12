/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

import * as core from '@newrade/core-webpack-config';
import merge from 'webpack-merge';
import WebpackOptions from 'webpack/declarations/WebpackOptions';
import { commonConfig, env } from './webpack.common.config';

const devConfig: WebpackOptions.WebpackOptions = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 400,
    ignored: /node_modules|public/,
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: env.APP_PORT,
    proxy: {
      '/api': 'http://localhost:10003',
    },
  },
  plugins: [
    core.getTreatCSSPlugin({
      isHmr: true,
      isSSR: false,
    }),
  ],
  stats: core.stats.dev,
  output: core.output.dev,
};

const config = merge(commonConfig, devConfig);

export default config;
