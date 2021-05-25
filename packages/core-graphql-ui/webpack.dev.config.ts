/**
 * Needed so ts-node can find core-types
 * @see https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-
 */
/// <reference types="./types/core-types" />

delete process.env.TS_NODE_PROJECT; // see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32

import {
  babelPluginConf,
  babelPresetConf,
  extractCssLoader,
  svgLoader,
} from '@newrade/core-webpack-config';

import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TreatPlugin from 'treat/webpack-plugin';
import * as tsloader from 'ts-loader';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import WebpackOptions from 'webpack/declarations/WebpackOptions';

dotenv.config();

const config: WebpackOptions.WebpackOptions = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    port: '8001',
  },
  module: {
    rules: [
      svgLoader,
      extractCssLoader,
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: babelPresetConf,
              plugins: babelPluginConf,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.build.json',
              logLevel: 'WARN',
              projectReferences: true,
            } as Partial<tsloader.Options>,
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: babelPresetConf,
              plugins: babelPluginConf,
            },
          },
        ],
        include: [path.resolve('src/**/*'), path.resolve('../**/*')],
      },
    ],
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.build.json',
        logLevel: 'WARN',
      }),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new (webpack as any).DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
        ? JSON.stringify(process.env.NODE_ENV)
        : JSON.stringify('development'),
      NODE_VERSION: process.env.version
        ? JSON.stringify(process.env.version)
        : JSON.stringify('unknown'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
      hmr: true,
    }),
    new MiniCssExtractPlugin(),
  ],
};

export default config;
