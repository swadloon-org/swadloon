/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

import * as core from '@newrade/core-webpack-config';
import merge from 'webpack-merge';
import WebpackOptions from 'webpack/declarations/WebpackOptions';
import { commonConfig } from './webpack.common.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const prodConfig: WebpackOptions.WebpackOptions = {
  mode: 'production',
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [core.terserPlugin],
  },
  performance: {
    hints: false,
    maxAssetSize: 800000,
    maxEntrypointSize: 800000,
  },
  plugins: [
    core.getBundleVisualizerPlugin(),
    core.getTreatCSSPlugin({
      isHmr: false,
      isSSR: false,
      outputLoaders: [MiniCssExtractPlugin.loader],
    }),
  ],
  stats: core.stats.prod,
  output: core.output.prod,
};

const config = merge(commonConfig, prodConfig);

export default config;
