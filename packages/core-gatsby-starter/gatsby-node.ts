import { spawnSync, spawn } from 'child_process';
import crypto from 'crypto';
import { GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { log, LOG_LEVEL } from 'core-utils';
import { createGatsbyWebpackConfig } from './webpack.config';
import chalk from 'chalk';

/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

require('dotenv').config();

const path = require('path');

// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const { data } = await graphql(`
//     {
//       contents: allGraphCmsBlogPost {
//         nodes {
//           description {
//             markdownNode {
//               childMdx {
//                 body
//               }
//             }
//           }
//           id
//           content
//           title
//         }
//       }
//     }
//   `);

//   data.contents.nodes.forEach((content) => {
//     createPage({
//       component: path.resolve(`src/templates/blog-page.tsx`),
//       context: {
//         id: content.id,
//         content,
//       },
//       path: `/blog-post/${content.title}`,
//     });
//   });
// };

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
  actions.setWebpackConfig(createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins }));
};
