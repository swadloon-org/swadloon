import { GatsbyNode } from 'gatsby';
import { createGatsbyWebpackConfig } from './webpack.config';

/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-treat',
    options: {},
  });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const isProduction = stage !== `develop`;
  const isSSR = stage.includes(`html`);
  console.log(isSSR);
  actions.setWebpackConfig(createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins }));
};
