import path from 'path';
import TreatPlugin from 'treat/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack/declarations/WebpackOptions';
import { extractCssLoader, getTreatCSSPlugin, scssLoader } from 'core-webpack-config';

const config: webpack.WebpackOptions = {
  mode: 'development',
  entry: './app/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    port: '8001',
  },
  module: {
    rules: [
      extractCssLoader,
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig-app.json',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'core-react-ui': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new (webpack as any).DefinePlugin({
      NODE_ENV: process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : JSON.stringify('development'),
      NODE_VERSION: process.env.version ? JSON.stringify(process.env.version) : JSON.stringify('unknown'),
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
    }),
    new MiniCssExtractPlugin(),
  ],
};

export default config;
