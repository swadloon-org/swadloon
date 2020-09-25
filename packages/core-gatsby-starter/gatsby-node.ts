import { GatsbyNode } from 'gatsby';
import { createGatsbyWebpackConfig } from './webpack.config';
import path from 'path';

/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

require('dotenv').config();

export type BlogPostContext = {
  id: string;
  content: any;
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    {
      contents: allGraphCmsBlogPost {
        nodes {
          id
          title
          contentRich {
            markdownNode {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  `);

  data.contents.nodes.forEach((content) => {
    createPage({
      component: path.resolve(`src/templates/blog-page.tsx`),
      context: {
        id: content.id,
        content: content.contentRich,
      } as BlogPostContext,
      path: `/blog-post/${content.title}`,
    });
  });
};

// export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions }) => {
//   const { createNode, createNodeField } = actions;

//   // Releases Nodes
//   if (node.remoteTypeName === `String`) {
//     // Add text/markdown node children to Release node
//     const textNode = {
//       id: `${node.id}-MarkdownBody`,
//       parent: node.id,
//       dir: path.resolve('./'),
//       internal: {
//         type: `${node.internal.type}MarkdownBody`,
//         mediaType: 'text/markdown',
//         content: node.body,
//         contentDigest: crypto
//           .createHash(`md5`)
//           .update(node.body as any)
//           .digest(`hex`),
//       },
//     };
//     createNode(textNode as any);

//     // Create markdownBody___NODE field
//     createNodeField({
//       node,
//       name: 'markdownBody___NODE',
//       value: textNode.id,
//     });
//   }
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
