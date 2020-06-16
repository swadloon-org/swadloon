const webpack = require('webpack');
const packageJson = require('../../../package.json');

const APP_ENV = process.env.APP_ENV ? process.env.APP_ENV : 'dev';
const CONFIG = packageJson.config.env[APP_ENV];

module.exports = {
  common: new webpack.DefinePlugin({
    NODE_ENV: process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : JSON.stringify('development'),
    NODE_VERSION: process.env.version ? JSON.stringify(process.env.version) : JSON.stringify('unknown'),
    APP_ENV: process.env.APP_ENV ? JSON.stringify(process.env.APP_ENV) : JSON.stringify('dev'),
    VERSION: JSON.stringify(packageJson.version),
    PROTOCOL: JSON.stringify(CONFIG.protocol),
    HOST: JSON.stringify(CONFIG.host),
    PORT: JSON.stringify(CONFIG.port),
  }),
};
