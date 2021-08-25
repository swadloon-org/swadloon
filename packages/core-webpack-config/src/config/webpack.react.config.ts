import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack, { Configuration, RuleSetRule, WebpackPluginInstance } from 'webpack';
import { getBabelReactLoader } from '../loaders/babel-react.loader';
import { extractCssLoader } from '../loaders/extract-css.loader';
import { fileLoader } from '../loaders/file.loader';
import { htmlLoader } from '../loaders/html.loader';
import { inlineCssLoader } from '../loaders/inline-css.loader';
import { svgLoader } from '../loaders/svg.loader';
import { getTreatLoader } from '../loaders/treat.loader';
import { txtLoader } from '../loaders/txt.loader';
import { getTypescriptBabelReactLoader } from '../loaders/typescript-babel.loader';
import { urlLoader } from '../loaders/url.loader';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin';
import { compressionPlugin } from '../plugins/compression.plugin.conf';
import { getForkTsCheckerWebpackPlugin } from '../plugins/fork-ts-checker.plugin.conf';

/**
 * Preconfigured base config for compiling TypeScript React Apps
 */
export const getReactCommonConfig: (options: { isDevelopment: boolean }) => Configuration = ({
  isDevelopment,
}) => {
  return {
    target: 'web',
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
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
      chunkIds: isDevelopment ? 'named' : 'deterministic',
      moduleIds: isDevelopment ? 'named' : 'deterministic',
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
        getBabelReactLoader({
          hmr: isDevelopment,
          plugins: [['@vanilla-extract/babel-plugin']],
        }),
        getTypescriptBabelReactLoader({
          isDevelopment,
        }),
        getTreatLoader({
          hmr: isDevelopment,
        }),
      ].filter(Boolean) as RuleSetRule[],
    },
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
    plugins: [
      getWebpackCleanPlugin(),
      getForkTsCheckerWebpackPlugin(),
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
  };
};
