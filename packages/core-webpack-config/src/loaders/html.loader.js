const path = require('path');
const configPaths = require('../../config-paths');

module.exports = {
  test: /\.(html|xml|ejs)$/,
  use: {
    loader: 'ejs-loader',
  },
  exclude: [configPaths.clientAppIndex],
};
