import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';

export const getManifestJsonHtmlPlugin: (
  options: HtmlWebpackPlugin.Options
) => WebpackPluginInstance = (options) =>
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
    ...options,
  });
