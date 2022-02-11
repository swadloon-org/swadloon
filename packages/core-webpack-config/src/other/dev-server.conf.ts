import { stats } from './stats.conf';

export const devServerConfig = {
  disableHostCheck: true,
  compress: false,
  historyApiFallback: true,
  watchContentBase: false,
  watchOptions: {
    aggregateTimeout: 5,
    ignored: [
      '**/.git/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/public/**',
      '**/.cache/**',
      '**/*.d.ts',
      '**/*.js.map',
      'graphql-types.ts',
    ],
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  proxy: {},
  stats: stats.dev,
};
