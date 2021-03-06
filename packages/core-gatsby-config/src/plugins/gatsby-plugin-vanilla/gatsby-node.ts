import { GatsbyNode } from 'gatsby';

import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import { Configuration } from 'webpack';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve(`@vanilla-extract/babel-plugin`),
    options: {},
  });
};

/**
 * @see https://vanilla-extract.style/documentation/setup/
 * @see https://github.com/KyleAMathews/gatsby-plugin-vanilla-extract
 */
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopStage = stage === 'develop';
  const isDevelopSSRStage = stage === 'develop-html';
  const isBuildJavaScriptStage = stage === 'build-javascript';
  const isSSRStage = stage === 'build-html';

  const config: Configuration = {
    plugins: [new VanillaExtractPlugin({})],
  };

  actions.setWebpackConfig(config);
};
