/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

// @ts-ignore
import merge from 'webpack-merge';
import { commonConfig } from './webpack.common.config';
import WebpackOptions from 'webpack/declarations/WebpackOptions';

const config: WebpackOptions.WebpackOptions = merge(commonConfig, {
  mode: 'production',
});

export default config;
