/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

import { log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import packageJson from './package.json';
// @ts-ignore
import { GatsbyNodeAllSiteQuery, GatsbyNodeMarkdownFilesQuery } from './types/graphql-types';

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  try {
    /**
     * Retrieve site information and all files infos in order to create pages.
     */
    const allSiteData = await graphql<GatsbyNodeAllSiteQuery>(`
      query GatsbyNodeAllSite {
        allSite {
          nodes {
            siteMetadata {
              title
              description
              siteEnv
              siteUrl
              languages {
                langs
                defaultLangKey
              }
            }
          }
        }
      }
    `);

    const markdownFilesData = await graphql<GatsbyNodeMarkdownFilesQuery>(`
      query GatsbyNodeMarkdownFiles {
        allFile(filter: { ext: { in: [".md", ".mdx"] } }) {
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
    `);

    // const pageTemplate = path.resolve(`src/templates/page.template.tsx`);
    // const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

    // /**
    //  * Organise files to create pages and paths
    //  */
    // const mdxPages = markdownFilesData?.data?.allFile.nodes.filter((node, index) => /mdx?/.test(node.ext));
    // const docsPages = mdxPages?.filter((node) => node.sourceInstanceName === 'docs');
    // const packageDocsPages = mdxPages?.filter((node) => node.sourceInstanceName === 'packagesDocs');

    // /**
    //  * Create package's docs pages
    //  */
    // docsPages?.forEach((node, index) => {
    //   const path = `${node.sourceInstanceName ? `${kebab(node.sourceInstanceName)}/` : ''}${node.childMdx?.slug}`;

    //   log(`Creating page: ${path}`, {
    //     toolName: packageJson.name,
    //   });

    //   createPage<GatsbyMarkdownFilePageContext>({
    //     path,
    //     context: {
    //       siteMetadata: allSiteData.data.
    //     },
    //     component: markdownTemplate,
    //   });
    // });
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
