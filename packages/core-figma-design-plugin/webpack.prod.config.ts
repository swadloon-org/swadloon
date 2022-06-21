delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools
process.env.NODE_ENV = 'production'; // ensure all tools find the correct env

import Configuration from 'webpack';
import merge from 'webpack-merge';

import * as core from '@newrade/core-webpack-config';

import { commonConfig } from './webpack.common.config.js';

const prodConfig: Configuration.Configuration = {
  mode: 'production',
  performance: false,
  plugins: [],
  stats: core.stats.prod,
  output: core.output.prod,
};

const config = merge(commonConfig, prodConfig);

export default config;
