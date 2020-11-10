/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

import { loadDotEnv, log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { ENV } from './types/dot-env';

const env = loadDotEnv<ENV>(path.resolve(__dirname, '.env'));

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
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
  } catch (error) {
    log(`Error occured when generating pages: ${error}`, {
      toolName: 'mir-website',
      level: LOG_LEVEL.ERROR,
    });
    if (error) {
      throw new Error('Error while retrieving pages');
    }
  }
};
