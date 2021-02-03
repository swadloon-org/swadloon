import { webpackStatsConf } from './stats.conf';

export const devServerConfig = {
  disableHostCheck: true,
  compress: false,
  historyApiFallback: true,
  watchContentBase: false,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules|dist|src\/server/,
    poll: 500,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  proxy: {},
  stats: webpackStatsConf.dev,
};
