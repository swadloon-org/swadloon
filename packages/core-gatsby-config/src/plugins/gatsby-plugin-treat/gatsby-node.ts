import { GatsbyNode } from 'gatsby';
import { TreatPlugin } from 'treat/webpack-plugin';
import { Configuration } from 'webpack';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve(`babel-plugin-treat`),
    options: {},
  });
};

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

  const config: Configuration = {
    plugins: [
      new TreatPlugin({
        localIdentName:
          isDevelopStage || isDevelopSSRStage
            ? `[name]_[local]_[hash:base64:5]`
            : `[hash:base64:5]`,
        themeIdentName:
          isDevelopStage || isDevelopSSRStage
            ? `_[name]-[local]_[hash:base64:4]`
            : `[hash:base64:4]`,
        outputCSS: isDevelopStage || isBuildJavaScriptStage,
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
