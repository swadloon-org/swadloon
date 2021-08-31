import { CommonEnvType } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { Configuration, DllReferencePlugin } from 'webpack';
import { GatsbyPluginCoreDllOptions } from '../gatsby-plugin-options';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';

/**
 *
 * @see 'node_modules/gatsby/dist/utils/webpack.config.js'
 */
export const onCreateWebpackConfigFunction: GatsbyNode['onCreateWebpackConfig'] = (
  { stage, rules, loaders, plugins, actions, getConfig, reporter },
  options
) => {
  const pluginOptions = options as unknown as GatsbyPluginCoreDllOptions;
  const env = process.env as CommonEnvType;

  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopStage = stage === 'develop';
  const isDevelopSSRStage = stage === 'develop-html';
  const isBuildJavaScriptStage = stage === 'build-javascript';
  const isSSRStage = stage === 'build-html';

  /**
   * Retrieve the initial gatsby webpack config
   */
  const config = getConfig() as Configuration;

  if (!config) {
    return void 0;
  }

  if (isDevelopSSRStage || isSSRStage) {
    return void 0;
  }

  reporter.info(`[${pluginOptions.pluginName}] adding dll reference plugin for react-vendor`);

  const reactVendorManifestPath = path.resolve(
    process.cwd(),
    '../core-react-ui/dll/react-manifest.json'
  );

  reporter.info(`[${pluginOptions.pluginName}] resolved path is ${reactVendorManifestPath}`);

  config.plugins = [
    ...(config.plugins || []),
    new DllReferencePlugin({
      context: path.join(process.cwd()),
      manifest: reactVendorManifestPath,
    }),
    new AddAssetHtmlPlugin([
      {
        filepath: path.resolve(process.cwd(), '../core-react-ui/dll/*.dll.js'),
        hash: true,
        outputPath: '/dll/',
      },
    ]),
  ];

  actions.replaceWebpackConfig(config);
};
