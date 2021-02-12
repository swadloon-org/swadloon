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

  if (stage === 'develop-html') {
    return;
  }

  const config: WebpackOptions = {
    plugins: [
      new TreatPlugin({
        localIdentName: `[name]_[local]_[hash:base64:5]`,
        themeIdentName: `_[name]-[local]_`,
        outputCSS: isSSR ? false : true,
        outputLoaders: [loaders.miniCssExtract({})],
        hmr: process.env.NODE_ENV === 'development',
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
