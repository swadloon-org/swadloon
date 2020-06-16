import { OutputOptions } from 'webpack/declarations/WebpackOptions';
import { ENVIRONMENT } from './environments';

export const defaultOuputConf: { [key in ENVIRONMENT]: OutputOptions } = {
  [ENVIRONMENT.DEV]: {
    filename: '[name].bundle.js',
    publicPath: '/',
    pathinfo: true,
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[file].map',
    globalObject: 'this',
  },
  [ENVIRONMENT.PROD]: {
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/',
    pathinfo: true,
    chunkFilename: '[id].[contenthash].chunk.js',
    sourceMapFilename: '[file].map',
    globalObject: 'this',
  },
};
