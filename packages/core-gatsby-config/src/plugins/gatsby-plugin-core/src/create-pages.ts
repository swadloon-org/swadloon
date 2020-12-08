import { AppError, ERROR_TYPE, log, LOG_LEVEL } from '@newrade/core-utils';
import { kebab } from 'case';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyMarkdownFilePageContext, GatsbyPageContext } from '../../../config/page-config';
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeMarkdownFilesQuery,
  GatsbyNodeSiteMetadataFragment,
} from '../../../config/site-graphql-types';
import { SOURCE_INSTANCE_NAME } from '../../../config/source-instances';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async ({ actions, graphql }, options) => {
  const { createPage, deletePage } = actions;
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;

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
      toolName: pluginOptions.packageName,
    });

    /**
     * Organise files to create pages and paths
     */
    // const markdownTemplate = path.resolve(`../core-gatsby-ui/lib/templates/markdown.template.js`);
    const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

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
        toolName: pluginOptions.packageName,
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
      toolName: pluginOptions.packageName,
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

export const onCreatePageFunction: GatsbyNode['onCreatePage'] = ({ page, actions }, options) => {
  const { createPage, deletePage } = actions;
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;

  if (!/src\/pages/g.test(page.component)) {
    return;
  }

  log(`Recreating page: ${page.path} with new context`, {
    toolName: pluginOptions.packageName,
    level: LOG_LEVEL.ERROR,
  });

  deletePage(page);
  createPage<GatsbyPageContext<GatsbyNodeSiteMetadataFragment>>({
    ...page,
    context: {
      siteMetadata,
      pageId: '',
    },
  });
};
