const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const configPaths = require('../../config-paths');
const utilities = require('../utilities/utilities');

module.exports = {
  client: new ForkTsCheckerWebpackPlugin({
    tsconfig: configPaths.clientTsConfig,
    watch: [configPaths.clientDir],
    useTypescriptIncrementalApi: true,
    workers: 1,
    silent: !utilities.isWebpackDevServer(),
    logger: {
      error: function (error) {
        console.log(error);
      },
      warn: function (warn) {
        console.warn(error);
      },
      info: function (info) {},
    },
  }),
};
