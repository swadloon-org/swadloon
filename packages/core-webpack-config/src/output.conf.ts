import { OutputOptions } from 'webpack/declarations/WebpackOptions';

export const outputConf: { [key: string]: OutputOptions } = {
  dev: {
    filename: '[name].bundle.js',
    publicPath: '/',
    pathinfo: true,
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[file].map',
    globalObject: 'this',
  },
  prod: {
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/',
    pathinfo: true,
    chunkFilename: '[id].[contenthash].chunk.js',
    sourceMapFilename: '[file].map',
    globalObject: 'this',
  },
  sw: {
    filename: '[name].js',
    pathinfo: true,
  },
};
