import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration, WebpackPluginInstance } from 'webpack';
import merge from 'webpack-merge';

import { loadDotEnv } from '@newrade/core-node-utils';
import * as core from '@newrade/core-webpack-config';
import { isDevelopment } from '@newrade/core-webpack-config';
import { getFigmaPluginConfig } from '@newrade/core-webpack-config/config';

import { ENV, Env } from './types/dot-env';
import { CLIENT_ENV } from './types/dot-env-client';
import packageJson from './package.json';

export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
  printEnvVariables: true,
});

const clientEnv: CLIENT_ENV = {
  APP_ENV: JSON.stringify(env.APP_ENV),
  APP_VERSION: JSON.stringify(packageJson.version),
};

const localCommonConfig: Configuration = {
  entry: {
    ui: path.resolve(__dirname, 'src/ui.tsx'), // The entry point for your UI code
    code: path.resolve(__dirname, 'src/code.ts'), // The entry point for your plugin code
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: '[name].[contenthash:8].css',
  },
  plugins: [
    /**
     * Templates
     */
    core.getHtmlPlugin({
      template: path.resolve(__dirname, 'src/manifest.json.ejs'),
      filename: path.join(__dirname, 'manifest.json'),
      chunks: ['code'],
      minify: false,
    }),
    core.getManifestJsonHtmlPlugin({
      template: path.resolve(__dirname, 'src/ui.ejs'),
      filename: 'ui.html',
      chunks: ['ui'],
    }),
    /**
     * Env variables
     */
    new webpack.DefinePlugin({
      ...clientEnv,
      global: {}, // Fix missing symbol error when running in developer VM
    }) as unknown as WebpackPluginInstance,
  ],
};

export const commonConfig: Configuration = merge(
  getFigmaPluginConfig({ isDevelopment: isDevelopment() }),
  localCommonConfig
);
