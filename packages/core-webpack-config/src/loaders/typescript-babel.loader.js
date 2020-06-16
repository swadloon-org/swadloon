const path = require('path');
const babelEnvPresetConfig = require('../babel-env-preset.conf');
const babelPluginsConf = require('../babel-plugins.conf');

const configPaths = require('../../config-paths');

module.exports = {
  test: /\.ts(x?)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [...babelPluginsConf, 'react-hot-loader/babel'],
        presets: [...babelEnvPresetConfig],
      },
    },
    {
      loader: 'ts-loader',
      options: {
        configFile: configPaths.clientTsConfig,
        transpileOnly: true, // Type checking is done in fork-ts-plugin
      },
    },
  ],
  exclude: [configPaths.nodeModules, configPaths.clientPolyfills, configPaths.dist],
  include: [configPaths.clientDir, configPaths.clientApp, configPaths.uiLibSrcFiles],
};
