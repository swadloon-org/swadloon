import { GatsbyNode } from 'gatsby';
import { WebpackOptions } from 'webpack/declarations/WebpackOptions';
import { getTreatCSSPlugin } from '@newrade/core-webpack-config';
import TreatPlugin from 'treat/webpack-plugin';

/**
 * @see https://github.com/seek-oss/treat/tree/master/packages/gatsby-plugin-treat
 */
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const isSSR = stage.includes(`html`);
  const isDev = process.env.NODE_ENV === 'development';

  if (stage === 'develop-html') {
    return;
  }

  const config: WebpackOptions = {
    plugins: [
      new TreatPlugin({
        localIdentName: isDev ? `[name]_[local]_[hash:base64:5]` : `[hash:base64:5]`,
        themeIdentName: isDev ? `_[name]-[local]_[hash:base64:4]` : `[hash:base64:4]`,
        outputCSS: isSSR ? false : true,
        minify: false, // can't control the css nano settings
        outputLoaders: [loaders.miniCssExtract()],
        hmr: isDev,
      }),
      // getTreatCSSPlugin({
      //   isSSR,
      //   outputLoaders: [loaders.miniCssExtract({})],
      //   isHmr: process.env.NODE_ENV === 'development',
      // }),
    ],
  };

  actions.setWebpackConfig(config);
};
