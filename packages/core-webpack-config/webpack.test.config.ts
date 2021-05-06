/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

import webpack from 'webpack/declarations/WebpackOptions';
import { ENVIRONMENT } from './src/environments';
import { babelReactLoader } from './src/loaders/babel-es6.loader';
import { typescriptBabelReactLoader } from './src/loaders/typescript-babel.loader';
import { defaultOuputConf } from './src/output.conf';
import { getBundleVisualizerPlugin } from './src/plugins/bundle-visualizer-plugin';

const config: webpack.WebpackOptions = {
  mode: 'production',
  entry: {
    es5: './test/index.js',
    es6: './test/es6/index.js',
    react: './test/react/index.tsx',
    ts: './test/typescript/index.ts',
  },
  module: {
    rules: [typescriptBabelReactLoader, babelReactLoader],
  },
  resolve: {
    alias: {
      'core-js': 'core-js-pure',
    },
  },
  plugins: [getBundleVisualizerPlugin()],
  output: {
    ...defaultOuputConf[ENVIRONMENT.PROD],
  },
};

export default config;
