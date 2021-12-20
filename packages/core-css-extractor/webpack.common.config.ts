import path from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack, { Configuration, RuleSetRule, WebpackPluginInstance } from 'webpack';
// @ts-ignore
import WebpackWatchedGlobEntries from 'webpack-watched-glob-entries-plugin';

import { loadDotEnv } from '@newrade/core-utils';
import * as core from '@newrade/core-webpack-config';

import { ENV, Env } from './types/dot-env';
import packageJson from './package.json';

const isDevelopment = core.isDevelopment();

//
// only load the .env if not already set
//
export const env = process.env['ENTRIES_GLOB']
  ? (process.env as ENV)
  : loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: path.resolve(__dirname, '.env'),
      packageName: packageJson.name,
      printEnvVariables: true,
    });

//
// validate env variables
//

if (!env.CSS_EXTRACTOR_ENTRIES_GLOB) {
  throw new Error('missing ENTRIES_GLOB');
}

if (!env.CSS_EXTRACTOR_OUTPUT_PATH) {
  throw new Error('missing OUTPUT_PATH');
}

const localCommonConfig: Configuration = {
  entry: WebpackWatchedGlobEntries.getEntries(
    [path.resolve(process.cwd(), env.CSS_EXTRACTOR_ENTRIES_GLOB)],
    {
      ignore: '**/*.test.js',
    }
  ),
  cache: false,
  output: {
    publicPath: '/',
    path: path.resolve(process.cwd(), env.CSS_EXTRACTOR_OUTPUT_PATH),
    // filename: (pathData, assetInfo) => {
    //   return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    // },
    // chunkFilename: (pathData) => {
    //   return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    // },
  },
  target: 'web',
  devtool: false,
  optimization: {
    minimizer: [core.getCSSMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        runtime: {
          type: 'runtime',
          name: 'runtime',
          chunks: (chunk) => {
            return false; // don't emit the runtime chunk, we don't need it
          },
          enforce: true,
        },
        colors: {
          type: 'css/mini-extract',
          name: 'colors',
          chunks: (chunk) => {
            return chunk.name === 'colors';
          },
          enforce: true,
        },
        effects: {
          type: 'css/mini-extract',
          name: 'effects',
          chunks: (chunk) => {
            return chunk.name === 'effects';
          },
          enforce: true,
        },
      },
    },
    runtimeChunk: false,
    chunkIds: isDevelopment ? 'named' : 'deterministic',
    moduleIds: isDevelopment ? 'named' : 'deterministic',
  },
  module: {
    rules: [
      core.svgLoader,
      core.htmlLoader,
      core.txtLoader,
      core.fileLoader,
      core.urlLoader,
      core.getBabelReactLoader({
        hmr: isDevelopment,
        plugins: [['@vanilla-extract/babel-plugin']],
      }),
      core.getTypescriptBabelReactLoader({
        isDevelopment,
        babelPlugins: [['@vanilla-extract/babel-plugin']],
      }),
      core.getTreatLoader({
        hmr: isDevelopment,
      }),
      /**
       * @see https://vanilla-extract.style/documentation/setup/
       */
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            ...core.cssLoader,
            options: {
              ...core.cssLoader.options,
              modules: false,
              importLoaders: 1,
              sourceMap: false,
              url: false, // Required as image imports should be handled via JS/TS import statements
            },
          },
          core.postCssLoader,
        ],
      },
    ].filter(Boolean) as RuleSetRule[],
  },
  plugins: [
    core.getWebpackCleanPlugin(),
    core.getForkTsCheckerWebpackPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    core.getVanillaExtractPlugin(),
    new MiniCssExtractPlugin({
      filename: ({ chunk }: { chunk: webpack.Chunk }) =>
        `${chunk.name.replace('.css.css', '.css')}`,
    }),
    core.getMiniCssCleanupPlugin(),
  ].filter(Boolean) as WebpackPluginInstance[],
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.json', '.wasm', '.ts', '.tsx', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(process.cwd(), 'tsconfig.json'),
        logLevel: 'WARN',
        mainFields: ['browser', 'module', 'main'],
        extensions: ['.js', '.json', '.wasm', '.ts', '.tsx', '.jsx'],
      }),
    ],
    fallback: {
      fs: false,
      os: false,
      assert: false,
    },
    alias: {
      'core-js': 'core-js-pure',
    },
  },
};

export const commonConfig: Configuration = localCommonConfig;
