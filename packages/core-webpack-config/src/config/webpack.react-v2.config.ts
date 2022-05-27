import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { kebab } from 'case';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, {
  Configuration,
  Module,
  NormalModule,
  RuleSetRule,
  WebpackPluginInstance,
} from 'webpack';

import { getBabelTypescriptReactLoader } from '../loaders/babel-react.loader';
import { extractCssLoader, extractVanillaCssLibLoader } from '../loaders/extract-css.loader';
import { fileLoader } from '../loaders/file.loader';
import { htmlLoader } from '../loaders/html.loader';
import { mdxLoader } from '../loaders/mdx.loader';
import { svgLoader } from '../loaders/svg.loader';
import { txtLoader } from '../loaders/txt.loader';
import { urlLoader } from '../loaders/url.loader';
import { getWebpackCleanPlugin } from '../plugins/clean-webpack-plugin';
import { compressionPlugin } from '../plugins/compression.plugin.conf';
import { getForkTsCheckerWebpackPlugin } from '../plugins/fork-ts-checker.plugin.conf';

/**
 * Preconfigured base config for compiling TypeScript React Apps
 * @see https://webpack.js.org/guides/build-performance/
 */
export const getReactCommonConfigV2: (options: { isDevelopment: boolean }) => Configuration = ({
  isDevelopment,
}) => {
  return {
    target: 'web',
    devtool: 'cheap-source-map',
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        maxAsyncRequests: Infinity,
        maxInitialRequests: Infinity,
        automaticNameDelimiter: '~',
        cacheGroups: {
          polyfills: {
            priority: 20,
            enforce: true,
            name: 'polyfills',
            chunks: 'all',
            test: /(polyfills?(-only)*\.js|fetch\.umd\.js)|[\\/]node_modules[\\/](core-js(-pure)?|@babel)[\\/]/,
          },
          /**
           * Split every node_module package into its own chunk
           */
          vendor: {
            priority: 10,
            test: /[\\/]node_modules[\\/]/,
            name(module: NormalModule) {
              const packageNameMatch = module?.context?.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              );
              if (!packageNameMatch) {
                return false;
              }
              const packageName = packageNameMatch[1];
              if (!packageName) {
                return false;
              }
              return `node_modules-${packageName.replace('@', '')}`;
            },
          },
          /**
           * Split every core-* package into its own chunk
           */
          ['core-react-ui']: {
            priority: 5,
            test: /[\\/]core-react-ui[\\/]/,
            name(module: Module) {
              const importNameMatch = module?.context?.match(
                /[\\/]core-react-ui[\\/]src[\\/](.*?)([\\/]|$)/
              );
              if (!importNameMatch) {
                return false;
              }
              const importName = importNameMatch[1];
              if (!importName) {
                return false;
              }
              return `core-react-ui-${importName.replace('@', '')}`;
            },
          },
          styles: {
            test: /\.(s?css)$/,
            name(module: Module) {
              const match = module?.context?.match(/[\\/](.*).css/);

              if (!match) {
                return false;
              }

              const moduleName = match[1];

              return moduleName;
            },
            enforce: true,
          },
          vanillaStyles: {
            test: /\.vanilla\.css$/,
            name(module: NormalModule) {
              if (!module.request) {
                return false;
              }
              const fileNameMatch = module.request.match(/"fileName":"(.+)\.vanilla\.css"/);
              if (!fileNameMatch) {
                return false;
              }
              const fileName = fileNameMatch[1];
              if (!fileName) {
                return false;
              }
              console.log(fileName);
              return `vanilla-extract-${kebab(fileName).replace('@', '')}`;
            },
            enforce: true,
          },
          vendors: false,
          default: false,
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
        mdxLoader,
        urlLoader,
        extractCssLoader,
        extractVanillaCssLibLoader,
        getBabelTypescriptReactLoader({
          hmr: isDevelopment,
          plugins: [['@vanilla-extract/babel-plugin']],
        }),
      ].filter(Boolean) as RuleSetRule[],
    },
    resolve: {
      mainFields: ['browser', 'module', 'main'],
      extensions: ['.js', '.json', '.wasm', '.ts', '.tsx', '.jsx'],
      plugins: [],
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
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          overlay: false,
        }),
      new MiniCssExtractPlugin() as unknown as WebpackPluginInstance,
      !isDevelopment && compressionPlugin,
    ].filter(Boolean) as WebpackPluginInstance[],
    resolveLoader: {
      alias: {
        'ejs-loader': '@newrade/core-webpack-config/ejs-loader',
      },
    },
  };
};
