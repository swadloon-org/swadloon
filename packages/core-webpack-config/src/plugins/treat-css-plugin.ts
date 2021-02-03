import { WebpackPluginInstance } from 'webpack/declarations/WebpackOptions';
import TreatPlugin from 'treat/webpack-plugin';

/**
 * TreatCSS Webpack Plugin
 * @see https://seek-oss.github.io/treat/webpack-options/
 */
export const getTreatCSSPlugin: (options: {
  isHmr: boolean;
  isSSR: boolean;
  outputLoaders?: any[];
}) => WebpackPluginInstance = function ({ isSSR, isHmr, outputLoaders }) {
  const devEnv = process.env.NODE_ENV === 'development';

  return new TreatPlugin({
    // TODO: check if possible to use localIdentContext https://github.com/webpack-contrib/css-loader#localidentcontext
    localIdentName: `[name]_[local]_[hash:base64:5]`,
    themeIdentName: `_[name]-[local]_`,
    outputCSS: isSSR ? false : true, // https://seek-oss.github.io/treat/setup#server-side-rendering
    outputLoaders,
    hmr: isHmr,
  });
};
