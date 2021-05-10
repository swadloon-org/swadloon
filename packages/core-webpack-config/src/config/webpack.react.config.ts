import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import WebpackOptions, { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';
import { babelReactLoader } from '../loaders/babel-es6.loader';
import { extractCssLoader } from '../loaders/extract-css.loader';
import { fileLoader } from '../loaders/file.loader';
import { htmlLoader } from '../loaders/html.loader';
import { svgLoader } from '../loaders/svg.loader';
import { txtLoader } from '../loaders/txt.loader';
import { getTypescriptBabelReactLoader } from '../loaders/typescript-babel.loader';
import { urlLoader } from '../loaders/url.loader';
import { getBrowserconfigHtmlPlugin } from '../plugins/browserconfig-html.plugin.conf';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin';
import { getHtmlPlugin } from '../plugins/html.plugin.conf';
import { getManifestJsonHtmlPlugin } from '../plugins/manifest-json-html.plugin.conf';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import { isDevelopment } from '../utilities';

/**
 * Preconfigured base config for compiling TypeScript React Apps
 */
export const reactCommonConfig: WebpackOptions.WebpackOptions = {
  target: 'web',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      cacheGroups: {
        polyfills: {
          name: 'polyfills',
          chunks: 'all',
          test: /(polyfills?(-only)*\.js|fetch\.umd\.js)|[\\/]node_modules[\\/](core-js(-pure)?|@babel)[\\/]/,
        },
        react: {
          name: 'react',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        },
        coreDesignSystem: {
          name: 'core-design-system',
          chunks: 'all',
          test: /[\\/]core-design-system[\\/]/,
        },
        coreReactUi: {
          name: 'core-react-ui',
          chunks: 'all',
          test: /[\\/]core-react-ui[\\/]/,
        },
        styles: {
          name: 'styles',
          test: /\.(s?css)$/,
          chunks: 'all',
        },
        default: {
          name: 'index',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
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
      getTypescriptBabelReactLoader(),
    ],
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.jsx', '.js', '.mjs', '.ts', '.tsx', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(process.cwd(), 'tsconfig.build.json'),
        mainFields: ['browser', 'module', 'main'],
        logLevel: 'WARN',
      }),
    ],
  },
  plugins: [
    getWebpackCleanPlugin(),
    isDevelopment() && new webpack.HotModuleReplacementPlugin(),
    isDevelopment() && new ReactRefreshWebpackPlugin(),
    (new MiniCssExtractPlugin() as unknown) as WebpackPluginInstance,
  ].filter(Boolean) as WebpackPluginInstance[],
  resolveLoader: {
    alias: {
      'ejs-loader': '@newrade/core-webpack-config/lib/loaders/ejs-loader.js',
    },
  },
};
