import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';
import TreatPlugin from 'treat/webpack-plugin';

/**
 * TreatCSS Webpack Plugin
 * @see https://seek-oss.github.io/treat/webpack-options/
 */
export const getTreatCSSPlugin: (options: {
  isSSR: boolean;
  outputLoaders?: any[];
}) => WebpackPluginInstance = function ({ isSSR, outputLoaders }) {
  return new TreatPlugin({
    localIdentName: '[name]_[local]_[hash:base64:5]',
    themeIdentName: '_[name]-[local]_',
    outputCSS: isSSR ? false : true, // https://seek-oss.github.io/treat/setup#server-side-rendering
    outputLoaders,
  });
};
