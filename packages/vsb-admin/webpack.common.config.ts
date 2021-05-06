import { loadDotEnv } from '@newrade/core-utils';
import * as core from '@newrade/core-webpack-config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TreatPlugin from 'treat/webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { WebpackOptions, WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';
import packageJson from './package.json';
import { ENV, Env } from './types/dot-env';
import { CLIENT_ENV } from './types/dot-env-client';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
});

const clientEnv: CLIENT_ENV = {
  APP_ENV: JSON.stringify(env.APP_ENV),
  APP_VERSION: JSON.stringify(packageJson.version),
};

const localCommonConfig: WebpackOptions = {
  entry: {
    ['index']: path.resolve(__dirname, 'src/index.tsx'),
  },
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
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    core.getHtmlPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
    }),
    core.getManifestJsonHtmlPlugin({
      template: path.resolve(__dirname, 'src/manifest.json.ejs'),
    }),
    core.getBrowserconfigHtmlPlugin({
      template: path.resolve(__dirname, 'src/browserconfig.xml.ejs'),
    }),
    (new webpack.DefinePlugin(clientEnv) as unknown) as WebpackPluginInstance,
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
      hmr: true,
    }),
    (new MiniCssExtractPlugin() as unknown) as WebpackPluginInstance,
  ],
};

export const commonConfig: WebpackOptions = merge(core.reactCommonConfig, localCommonConfig);
