import merge from 'webpack-merge';
import { commonConfig } from './webpack.common.config';
import WebpackOptions from 'webpack/declarations/WebpackOptions';

const config: WebpackOptions.WebpackOptions = merge(commonConfig, {
  mode: 'production',
});

export default config;
