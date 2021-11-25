import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';

import { isWebpackDevServer } from '../utilities/webpack-dev-server.utilities';

const minifyHtmlOptions = {
  prod: {
    removeComments: true,
    collapseWhitespace: true,
  },
  dev: false,
};

const env = process.env.APP_ENV ? process.env.APP_ENV : 'dev';

export const getHtmlPlugin: (options: { template: string }) => WebpackPluginInstance = (options) =>
  new HtmlWebpackPlugin({
    template: options.template,
    chunks: ['index'],
    inject: false,
    cache: false,
    hash: false,
    isDevServer: isWebpackDevServer(),
    env,
    minify: isWebpackDevServer() ? false : minifyHtmlOptions.prod,
  });
