import webpack from 'webpack/declarations/WebpackOptions';
import { ENVIRONMENT } from './src/environments';
import { defaultOuputConf, getBundleVisualizerPlugin } from './src/index';
import { es6BabelLoader } from './src/loaders/es6-babel.loader';
import { typescriptBabelLoader } from './src/loaders/typescript-babel.loader';

const config: webpack.WebpackOptions = {
  mode: 'production',
  entry: {
    es5: './test/index.js',
    es6: './test/es6/index.js',
    react: './test/react/index.tsx',
    ts: './test/typescript/index.ts',
  },
  module: {
    rules: [typescriptBabelLoader, es6BabelLoader],
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
