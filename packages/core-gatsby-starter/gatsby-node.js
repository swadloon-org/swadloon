"use strict";
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.createPages = async ({ actions, graphql }) => {
    // const { data } = await graphql(`
    //   {
    //     gcms
    //   }
    // `);
    // console.log(data);
    // data.contents.nodes.forEach((node) => {
    //   createPage({
    //     component: path.resolve(`src/templates/blog-page.tsx`),
    //     context: {
    //       id: node.id,
    //       content: node.contentRich,
    //     } as BlogPostContext,
    //     path: `/blog-post/_${node.title}`,
    //   });
    // });
};
