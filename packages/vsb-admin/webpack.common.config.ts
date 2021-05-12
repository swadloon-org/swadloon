import { loadDotEnv } from '@newrade/core-utils';
import * as core from '@newrade/core-webpack-config';
import { isDevelopment } from '@newrade/core-webpack-config';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { WebpackOptions, WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';
import packageJson from './package.json';
import { ENV, Env } from './types/dot-env';
import { CLIENT_ENV } from './types/dot-env-client';

export const env = loadDotEnv<ENV>({
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
  output: {
    publicPath: '/admin/',
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
    (new webpack.DefinePlugin(clientEnv) as unknown) as WebpackPluginInstance,
  ],
};

export const commonConfig: WebpackOptions = merge(
  core.getReactCommonConfig({ isDevelopment: isDevelopment() }),
  localCommonConfig
);
