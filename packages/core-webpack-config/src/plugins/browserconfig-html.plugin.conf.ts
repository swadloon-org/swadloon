import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';

export const getBrowserconfigHtmlPlugin: (options: { template: string }) => WebpackPluginInstance =
  (options) =>
    new HtmlWebpackPlugin({
      template: options.template,
      chunks: [],
      filename: 'browserconfig.xml',
      inject: false,
      hash: false,
      minify: false,
      // csp plugin
      cspPlugin: {
        enabled: false,
      },
    });
