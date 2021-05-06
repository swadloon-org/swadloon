import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import WebpackOptions from 'webpack/declarations/WebpackOptions';
import { babelReactLoader } from '../loaders/babel-es6.loader';
import { extractCssLoader } from '../loaders/extract-css.loader';
import { fileLoader } from '../loaders/file.loader';
import { htmlLoader } from '../loaders/html.loader';
import { svgLoader } from '../loaders/svg.loader';
import { txtLoader } from '../loaders/txt.loader';
import { typescriptBabelReactLoader } from '../loaders/typescript-babel.loader';
import { urlLoader } from '../loaders/url.loader';
import { getBrowserconfigHtmlPlugin } from '../plugins/browserconfig-html.plugin.conf';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin';
import { getHtmlPlugin } from '../plugins/html.plugin.conf';
import { getManifestJsonHtmlPlugin } from '../plugins/manifest-json-html.plugin.conf';

/**
 * Preconfigured base config for compiling TypeScript React Apps
 */
export const reactCommonConfig: WebpackOptions.WebpackOptions = {
  target: 'web',
  devtool: 'source-map',
  node: {
    net: 'empty',
  },
  optimization: {
    minimize: false,
    namedModules: true,
    namedChunks: true,
  },
  module: {
    rules: [
      svgLoader,
      htmlLoader,
      txtLoader,
      fileLoader,
      urlLoader,
      extractCssLoader,
      babelReactLoader,
      typescriptBabelReactLoader,
    ],
  },
  resolve: {
    mainFields: ['main', 'module'],
    extensions: ['.jsx', '.js', '.mjs', '.ts', '.tsx', '.json'],
    symlinks: false,
    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.build.json',
        logLevel: 'WARN',
      }),
    ],
  },
  plugins: [getWebpackCleanPlugin()],
  resolveLoader: {
    alias: {
      'ejs-loader': '@newrade/core-webpack-config/lib/loaders/ejs-loader.js',
    },
  },
};
