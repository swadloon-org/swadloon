const path = require('path');
const babelEnvPresetConfig = require('../../babel-env-preset.conf');
const babelPluginsConf = require('../../babel-plugins.conf');

const configPaths = require('../../../config-paths');

module.exports = {
  test: /\.(js)$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [...babelPluginsConf],
        presets: [...babelEnvPresetConfig],
      },
    },
  ],
  exclude: [configPaths.clientDir],
};
