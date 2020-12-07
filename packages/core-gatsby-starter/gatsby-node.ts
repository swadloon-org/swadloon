/**
 * Gatsby Node APIs
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-node/
 */

import {
  GatsbyMarkdownFilePageContext,
  GatsbyPageContext,
  GatsbySrcPageContext,
  SOURCE_INSTANCE_NAME,
} from '@newrade/core-gatsby-config';
import { AppError, ERROR_TYPE, log, LOG_LEVEL } from '@newrade/core-utils';
import { kebab } from 'case';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import packageJson from './package.json';
/**
 * GraphQL Types for gatsby-node.js queries since they don't exist at first, they can
 * be ignored by the compiler with // @ts-ignore
 */
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeMarkdownFilesQuery,
  GatsbyNodeSiteMetadataFragment,
  GatsbyNodeSrcPageFilesQuery,
  GatsbyNodeSrcPagesQuery,
} from './types/graphql-types';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage, deletePage } = actions;

  try {
    /**
     * Query for site metadata
     */
    const allSiteData = await graphql<GatsbyNodeAllSiteQuery>(`
      query GatsbyNodeAllSite {
        site {
          siteMetadata {
            ...GatsbyNodeSiteMetadata
          }
        }
      }

      fragment GatsbyNodeSiteMetadata on SiteSiteMetadata {
        title
        description
        siteEnv
        siteUrl
        languages {
          langs
          defaultLangKey
        }
      }
    `);

    if (!allSiteData.data?.site?.siteMetadata) {
      throw new AppError({
        name: ERROR_TYPE.GATSBY_ERROR,
        message: `Could not retrieve siteMetadata`,
      });
    }

    siteMetadata = allSiteData.data.site.siteMetadata;

    const srcPagesData = await graphql<GatsbyNodeSrcPagesQuery>(`
      query GatsbyNodeSrcPages {
        allSitePage(filter: { component: { regex: "/src/pages/g" } }) {
          nodes {
            id
            path
            component
          }
        }
      }
    `);

    log(`Got ${srcPagesData?.data?.allSitePage?.nodes?.length} files for pages`, {
      toolName: packageJson.name,
    });

    /**
     * *** NOT WORKING CURRENTLY sources pages from gatsby-source-filesystem cause a crash during build ***
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `srcPages`,
        path: `${__dirname}/src/pages/`,
      },
    },
     * Query for pages found in /src/pages
     */
    const srcPagesFilesData = await graphql<GatsbyNodeSrcPageFilesQuery>(`
      query GatsbyNodeSrcPageFiles {
        allFile(filter: { ext: { in: [".tsx"] }, sourceInstanceName: { eq: "srcPages" } }) {
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
          }
        }
      }
    `);

    log(`Got ${srcPagesFilesData?.data?.allFile?.nodes?.length} files for src pages`, {
      toolName: packageJson.name,
    });

    /**
     * Query for all `.md?x` files
     */
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

    log(`Got ${markdownFilesData?.data?.allFile?.nodes?.length} files for markdown pages`, {
      toolName: packageJson.name,
    });

    /**
     * Organise files to create pages and paths
     */
    const srcPageTemplate = path.resolve(`src/templates/src-page.template.tsx`);
    const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

    /**
     * *** NOT WORKING CURRENTLY ***
     * Create src pages
     */
    srcPagesFilesData?.data?.allFile.nodes.forEach((node, index) => {
      const nodeName = node.name.replace('page', '');
      const path = nodeName === 'index' ? `/` : `${kebab(nodeName)}/`;

      log(`Creating src page: ${path}`, {
        toolName: packageJson.name,
      });

      createPage<GatsbySrcPageContext<GatsbyNodeSiteMetadataFragment>>({
        path,
        context: {
          siteMetadata,
          fileId: node.id,
        },
        component: node.absolutePath,
      });
    });

    /**
     * Create Markdown pages
     */
    markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
      const dir =
        node.sourceInstanceName === SOURCE_INSTANCE_NAME.MDX_PAGES
          ? ``
          : `${node.sourceInstanceName ? `${kebab(node.sourceInstanceName)}/` : ''}`;
      const path = `${dir}${node.childMdx?.slug}`;

      log(`Creating markdown page: ${path}`, {
        toolName: packageJson.name,
      });

      createPage<GatsbyMarkdownFilePageContext<GatsbyNodeSiteMetadataFragment>>({
        path,
        context: {
          siteMetadata,
          fileId: node.id,
        },
        component: markdownTemplate,
      });
    });
  } catch (error) {
    log(`Error occured when generating pages: ${error}`, {
      toolName: packageJson.name,
      level: LOG_LEVEL.ERROR,
    });
    if (error) {
      throw new AppError({
        name: ERROR_TYPE.GATSBY_ERROR,
        message: error,
      });
    }
  }
};

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (!/src\/pages/g.test(page.component)) {
    return;
  }

  deletePage(page);
  createPage<GatsbyPageContext<GatsbyNodeSiteMetadataFragment>>({
    ...page,
    context: {
      siteMetadata,
      pageId: '',
    },
  });
};
