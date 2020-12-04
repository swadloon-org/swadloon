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
     * Automatically create pages
     */
    const allFiles = await graphql<{
      allSite: {
        nodes: { id: string; blogSlug: string; node_locale: string }[];
      };
      allFile: {
        nodes: {
          id: string;
          name: string;
          absolutePath: string;
          ext: string;
          dir: string;
          size: string;
          sourceInstanceName: string;
        }[];
      };
    }>(
      `
        {
          allSite {
            nodes {
              siteMetadata {
                languages {
                  langs
                  defaultLangKey
                }
                description
                siteEnv
                siteUrl
                title
              }
            }
          }
          allFile {
            nodes {
              id
              name
              base
              ext
              dir
              absolutePath
              publicURL
              size
              sourceInstanceName
              childMdx {
                slug
                excerpt
                frontmatter {
                  name
                  tags
                  title
                }
              }
            }
          }
        }
      `
    );

    // const markdownTemplate = path.resolve(`src/templates/page.template.tsx`);
    // const markdownTemplate = path.resolve(`src/templates/page.template.tsx`);
    allFiles.data?.allFile.nodes.forEach((node, index) => {
      log(`Creating page: ${node.name}`, {
        toolName: 'mir-website',
      });
    });
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
