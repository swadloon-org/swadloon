// @ts-ignore
import merge from 'webpack-merge';
import { commonConfig } from './webpack.common.config';
import WebpackOptions from 'webpack/declarations/WebpackOptions';
import webpack from 'webpack';
import path from 'path';
// @ts-ignore
import nodeExternals from 'webpack-node-externals';

const devConfig: WebpackOptions.WebpackOptions = {
  entry: {
    ['webpack/hot/poll?1000']: 'webpack/hot/poll?1000',
    ['server-express']: path.resolve(__dirname, 'src/server-express.ts'),
  },
  externals: [nodeExternals({ allowlist: ['webpack/hot/poll?1000'] })],
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules|dist/,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

const config: WebpackOptions.WebpackOptions = merge(commonConfig, devConfig);

export default config;
