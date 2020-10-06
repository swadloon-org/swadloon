import webpack from 'webpack/declarations/WebpackOptions';

import { defaultOuputConf } from './src/index';
import { ENVIRONMENT } from './src/environments';

const config: webpack.WebpackOptions = {
  mode: 'production',
  entry: './test/index.js',
  output: {
    ...defaultOuputConf[ENVIRONMENT.PROD],
  },
};

export default config;
