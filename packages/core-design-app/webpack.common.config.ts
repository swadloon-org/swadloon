import path from 'path';

import webpack, { Configuration, WebpackPluginInstance } from 'webpack';
import merge from 'webpack-merge';

import { loadDotEnv } from '@newrade/core-node-utils';
import * as core from '@newrade/core-webpack-config';
import { isDevelopment } from '@newrade/core-webpack-config';
import { getReactCommonConfig } from '@newrade/core-webpack-config/config';

import { ENV, Env } from './types/dot-env';
import { CLIENT_ENV } from './types/dot-env-client';
import packageJson from './package.json';

export const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
});

const clientEnv: CLIENT_ENV = {
  APP_ENV: JSON.stringify(env.APP_ENV),
  APP_VERSION: JSON.stringify(packageJson.version),
};

const localCommonConfig: Configuration = {
  entry: {
    ['index']: path.resolve(__dirname, 'src/index.tsx'),
  },
  cache: false,
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
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
    core.getVanillaExtractPlugin(),
    new webpack.DefinePlugin(clientEnv) as unknown as WebpackPluginInstance,
  ],
};

export const commonConfig: Configuration = merge(
  getReactCommonConfig({ isDevelopment: isDevelopment() }),
  localCommonConfig
);
