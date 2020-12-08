/**
 * Gatsby Node APIs
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-node/
 */

import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage, deletePage } = actions;
};

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
};
