import { AppError, ERROR_TYPE, log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyMarkdownFilePageContext, GatsbySrcPageContext } from '../../../config/page-config';
import { GatsbyNodeAllSiteQuery, GatsbyNodeSiteMetadataFragment } from '../../../config/site-graphql-types';
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
    // const markdownFilesData = await graphql<GatsbyNodeMarkdownFilesQuery>(`
    //   query GatsbyNodeMarkdownFiles {
    //     allFile(filter: { ext: { in: [".md", ".mdx"] } }) {
    //       nodes {
    //         id
    //         name
    //         base
    //         ext
    //         dir
    //         absolutePath
    //         publicURL
    //         size
    //         sourceInstanceName
    //         childMdx {
    //           slug
    //           excerpt
    //           frontmatter {
    //             name
    //             tags
    //             title
    //           }
    //         }
    //       }
    //     }
    //   }
    // `);

    // log(`Got ${markdownFilesData?.data?.allFile?.nodes?.length} files for markdown pages`, {
    //   toolName: pluginOptions.packageName,
    // });

    /**
     * Organise files to create pages and paths
     */
    // const markdownTemplate = path.resolve(`../core-gatsby-ui/lib/templates/markdown.template.js`);
    // const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

    /**
     * Create Markdown pages
     */
    // markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
    //   const dir =
    //     node.sourceInstanceName === SOURCE_INSTANCE_NAME.MDX_PAGES
    //       ? ``
    //       : `${node.sourceInstanceName ? `${kebab(node.sourceInstanceName)}/` : ''}`;
    //   const path = `${dir}${node.childMdx?.slug}`;

    //   log(`Creating markdown page: ${path}`, {
    //     toolName: pluginOptions.packageName,
    //   });

    //   createPage<GatsbyMarkdownFilePageContext<GatsbyNodeSiteMetadataFragment>>({
    //     path,
    //     context: {
    //       siteMetadata,
    //       fileId: node.id,
    //     },
    //     component: markdownTemplate,
    //   });
    // });
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
  let updatedPath = page.path;
  const { frontmatter } = page.context as any;
  // const markdownTemplate = path.resolve(`../core-gatsby-ui/lib/templates/markdown.template.js`);
  const markdownTemplate = path.resolve(`src/templates/markdown.template.tsx`);

  if (frontmatter) {
    if (/\/docs/g.test(page.component)) {
      updatedPath = `docs${page.path}`.replace('&', 'and');
    }

    const slugWithoutSlash = page.path.replace(/(^\/)/, '');
    const slug = slugWithoutSlash.replace(/(\/)$/, '').replace('&', 'and');

    log(`Recreating page: ${updatedPath}, slug: ${slug}`, {
      toolName: pluginOptions.packageName,
      level: LOG_LEVEL.INFO,
    });

    deletePage(page);

    createPage<GatsbyMarkdownFilePageContext<GatsbyNodeSiteMetadataFragment>>({
      path: updatedPath,
      component: markdownTemplate,
      context: {
        ...page.context,
        siteMetadata,
        slug,
      },
    });
    return;
  }

  log(`Recreating page: ${updatedPath}`, {
    toolName: pluginOptions.packageName,
    level: LOG_LEVEL.INFO,
  });

  deletePage(page);

  createPage<GatsbySrcPageContext<GatsbyNodeSiteMetadataFragment>>({
    ...page,
    path: updatedPath,
    context: {
      ...page.context,
      siteMetadata,
      fileId: '',
    },
  });
};

export const onCreateNodeFunction: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }, options) => {
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;
  const { createNodeField } = actions;

  if (node && node.context && (node.context as any).frontmatter && (node.context as any).slug) {
    const slug = (node.context as any).slug;
    const updatedSlug = slug.replace('docs/', '');
    log(`Updating node: ${node.id}`, {
      toolName: pluginOptions.packageName,
      level: LOG_LEVEL.INFO,
    });
    createNodeField({
      name: 'slug',
      node,
      value: updatedSlug,
    });
  }
};
