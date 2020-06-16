const path = require('path');

const configPaths = require('../../config-paths');
const babelEnvPresetConfig = require('../babel-env-preset.conf');
const babelPluginsConf = require('../babel-plugins.conf');

module.exports = {
  test: /\.(m?js)$/,
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
  exclude: [configPaths.dist],
  include: [path.join(configPaths.nodeModules, 'idlize')],
};
