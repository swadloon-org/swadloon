"use strict";
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const src_1 = require("../core-utils/src");
require('dotenv').config();
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    /**
     * Page creations
     */
    try {
        /**
         * Automatically create pages for each markdown file in /docs
         */
        // const mdxFiles = await graphql<{
        //   allContentfulBlogPost: {
        //     edges: { node: { id: string; blogSlug: string; node_locale: string } }[];
        //   };
        // }>(
        //   `
        //     query GatsbyNodeBlogPosts {
        //       allContentfulBlogPost {
        //         edges {
        //           node {
        //             node_locale
        //             id
        //             blogSlug
        //           }
        //         }
        //       }
        //     }
        //   `
        // );
        // if (blogPosts.errors) {
        //   throw new Error('Error while retrieving blog posts');
        // }
        // const markdownTemplate = path.resolve(`src/templates/page.template.tsx`);
        // mdxFiles.data.allContentfulPage.edges
        //   .filter((edge) => {
        //     if (!(edge && edge.node)) {
        //       return false;
        //     }
        //     return true;
        //   })
        //   .forEach((edge, index) => {
        //     log(`Creating page: ${edge.node.route}`, {
        //       toolName: 'mir-website',
        //     });
        //     createPage<GatsbyPageContext>({
        //       path: edge.node.route,
        //       component: markdownTemplate,
        //       context: {
        //         pageId: edge.node.id,
        //       },
        //     });
        //   });
    }
    catch (error) {
        src_1.log(`Error occured when generating pages: ${error}`, {
            toolName: 'mir-website',
            level: src_1.LOG_LEVEL.ERROR,
        });
        if (error) {
            throw new Error('Error while retrieving pages');
        }
    }
};
