import { Configuration } from 'webpack';

export const output: { [key in 'dev' | 'prod']: Configuration['output'] } = {
  dev: {
    filename: '[name].bundle.js',
    pathinfo: true,
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[file].map',
    globalObject: 'this',
  },
  prod: {
    filename: '[name].bundle.[contenthash].js',
    pathinfo: true,
    chunkFilename: '[id].[contenthash].chunk.js',
    sourceMapFilename: '[file].map',
    globalObject: 'this',
  },
};
