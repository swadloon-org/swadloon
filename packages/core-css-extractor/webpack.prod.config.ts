/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools
process.env.NODE_ENV = 'production'; // ensure all tools find the correct env

import Configuration from 'webpack';
import merge from 'webpack-merge';

import * as core from '@newrade/core-webpack-config';

import { commonConfig } from './webpack.common.config';

const prodConfig: Configuration.Configuration = {
  mode: 'production',
  devtool: false,
  optimization: {},
  performance: false,
  plugins: [core.getSizePlugin()],
  stats: {
    all: false,
    assets: true,
    errors: true,
    logging: 'info',
  },
  output: core.output.prod,
};

const config = merge(commonConfig, prodConfig);

export default config;
