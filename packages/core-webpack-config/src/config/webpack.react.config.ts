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
import { inlineCssLoader } from '../loaders/inline-css.loader';
import { compressionPlugin } from '../plugins/compression.plugin.conf';
import { getForkTsCheckerWebpackPlugin } from '../plugins/fork-ts-checker.plugin.conf';

/**
 * Preconfigured base config for compiling TypeScript React Apps
 */
export const getReactCommonConfig: (options: {
  isDevelopment: boolean;
}) => WebpackOptions.WebpackOptions = ({ isDevelopment }) => ({
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
          chunks: 'initial',
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
      isDevelopment && inlineCssLoader,
      !isDevelopment && extractCssLoader,
      babelReactLoader,
      getTypescriptBabelReactLoader(),
    ].filter(Boolean) as WebpackOptions.RuleSetRules,
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
    // getForkTsCheckerWebpackPlugin(),
    getWebpackCleanPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    !isDevelopment && (new MiniCssExtractPlugin() as unknown as WebpackPluginInstance),
    !isDevelopment && compressionPlugin,
  ].filter(Boolean) as WebpackPluginInstance[],
  resolveLoader: {
    alias: {
      'ejs-loader': '@newrade/core-webpack-config/lib/loaders/ejs-loader.js',
    },
  },
});
