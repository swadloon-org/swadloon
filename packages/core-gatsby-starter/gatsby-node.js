"use strict";
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const core_utils_1 = require("@newrade/core-utils");
const path_1 = __importDefault(require("path"));
const env = core_utils_1.loadDotEnv(path_1.default.resolve(__dirname, '.env'));
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
        core_utils_1.log(`Error occured when generating pages: ${error}`, {
            toolName: 'mir-website',
            level: core_utils_1.LOG_LEVEL.ERROR,
        });
        if (error) {
            throw new Error('Error while retrieving pages');
        }
    }
};
