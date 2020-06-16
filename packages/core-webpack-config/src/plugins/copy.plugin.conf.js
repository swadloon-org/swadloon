const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const configPaths = require('../../config-paths');

module.exports = {
  common: new CopyWebpackPlugin([
    {
      from: path.join(configPaths.clientApp, 'robots.txt'),
      flatten: true,
    },
    {
      from: path.join(configPaths.clientApp, 'humans.txt'),
      flatten: true,
    },
  ]),
};
