import { GatsbyNode } from 'gatsby';
import { Configuration } from 'webpack';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve(`@vanilla-extract/babel-plugin`),
    options: {},
  });
};

/**
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
