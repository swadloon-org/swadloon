import { GatsbyNode } from 'gatsby';
import TreatPlugin from 'treat/webpack-plugin';
import { WebpackOptions } from 'webpack/declarations/WebpackOptions';

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
  const isProduction = stage !== `develop`;
  const isSSR = stage.includes(`html`);

  if (stage === 'develop-html') {
    return {};
  }

  const config: WebpackOptions = {
    plugins: [
      new TreatPlugin({
        localIdentName: '[name]_[local]_[hash:base64:5]',
        themeIdentName: '_[name]-[local]_',
        outputCSS: isSSR ? false : true, // https://seek-oss.github.io/treat/setup#server-side-rendering
        outputLoaders: [
          loaders.miniCssExtract({
            // // Options similar to the same options in webpackOptions.output
            // // both options are optional
            // filename: !isProduction ? '[name].css' : '[name].[contenthash].css',
            // chunkFilename: !isProduction ? '[id].css' : '[id].[contenthash].css',
          }),
        ],
        hmr: process.env.NODE_ENV === 'development',
      }),
    ],
  };

  actions.setWebpackConfig(config);
};
