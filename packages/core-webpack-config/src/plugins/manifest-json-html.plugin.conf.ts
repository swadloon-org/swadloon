import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export const getManifestJsonHtmlPlugin: (options: { template: string }) => WebpackPluginInstance = (
  options
) =>
  new HtmlWebpackPlugin({
    template: options.template,
    chunks: [],
    filename: 'manifest.json',
    inject: false,
    hash: false,
    minify: false,
    // csp plugin
    cspPlugin: {
      enabled: false,
    },
  });
