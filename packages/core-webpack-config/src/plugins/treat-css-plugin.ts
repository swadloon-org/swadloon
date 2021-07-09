import { WebpackPluginInstance } from 'webpack';
import { TreatPlugin } from 'treat/webpack-plugin';

/**
 * TreatCSS Webpack Plugin
 * @see https://seek-oss.github.io/treat/webpack-options/
 */
export const getTreatCSSPlugin: (options: {
  isHmr: boolean;
  isSSR: boolean;
  outputLoaders?: any[];
}) => WebpackPluginInstance = function ({ isSSR, isHmr, outputLoaders }) {
  return new TreatPlugin({
    // TODO: check if possible to use localIdentContext https://github.com/webpack-contrib/css-loader#localidentcontext
    localIdentName: `[name]_[local]_[hash:base64:5]`,
    themeIdentName: `_[name]-[local]_`,
    outputCSS: isSSR ? false : true, // https://seek-oss.github.io/treat/setup#server-side-rendering
    outputLoaders: outputLoaders || ['style-loader'], // e.g. MiniCssExtractPlugin.loader or 'style-loader'
    hmr: isHmr,
  });
};
