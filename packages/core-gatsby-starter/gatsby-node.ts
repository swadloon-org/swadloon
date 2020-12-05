/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
import { log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import packageJson from './package.json';

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
        toolName: packageJson.name,
      });
    });
  } catch (error) {
    log(`Error occured when generating pages: ${error}`, {
      toolName: packageJson.name,
      level: LOG_LEVEL.ERROR,
    });
    if (error) {
      throw new Error('Error while retrieving pages');
    }
  }
};
