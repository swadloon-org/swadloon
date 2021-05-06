import * as core from '@newrade/core-webpack-config';
import path from 'path';
import merge from 'webpack-merge';
import WebpackOptions from 'webpack/declarations/WebpackOptions';
import { commonConfig } from './webpack.common.config';

const prodConfig: WebpackOptions.WebpackOptions = {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [],
  stats: core.stats.prod,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

const config = merge(commonConfig, prodConfig);

export default config;
