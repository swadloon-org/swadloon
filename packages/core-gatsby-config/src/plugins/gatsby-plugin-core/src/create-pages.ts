import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { log, LOG_LEVEL } from '@newrade/core-utils';
import { kebab, pascal, title } from 'case';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyMarkdownFilePageContext, GatsbySrcPageContext } from '../../../config/page-config';
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeMarkdownFilesQuery,
  GatsbyNodeSiteMetadataFragment,
} from '../../../config/site-graphql-types';
import { SITE_LANGUAGES } from '../../../config/site-languages';
import { SOURCE_INSTANCE_NAME } from '../../../config/source-instances';
import { getDirNameFromRelativePath, getLocaleDirName, getPageFormattedName } from '../../../utils/dir-name.utilities';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async ({ actions, graphql }, options) => {
  const { createPage } = actions;
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;

  try {
    /**
     * Query for site metadata which will be set to all pages' context
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

    if (pluginOptions.enableDocsPages) {
      /**
       * Query for mdx files in /docs/
       */
      const markdownFilesData = await graphql<GatsbyNodeMarkdownFilesQuery>(`
        query GatsbyNodeMarkdownFiles {
          allFile(filter: { sourceInstanceName: { in: ["MONO_REPO_DOCS", "DOCS"] }, ext: { in: [".md", ".mdx"] } }) {
            nodes {
              id
              name
              base
              ext
              dir
              absolutePath
              relativePath
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
      const markdownTemplate = path.resolve(`../core-gatsby-ui/src/templates/markdown.template.tsx`);

      /**
       * Create Markdown pages
       */
      markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
        const dir = getDirNameForSourceInstance(node.sourceInstanceName as SOURCE_INSTANCE_NAME);
        const path = `${getLocaleDirName(node.name, siteMetadata.languages?.defaultLangKey)}${dir}${
          node.childMdx?.slug
        }`;
        const locale = /fr\.+/.test(node.name) ? SITE_LANGUAGES.FR : SITE_LANGUAGES.EN;
        const name = `${title(node.childMdx?.frontmatter?.name || node.name)}`;
        const displayName = name;

        log(`Creating markdown page: ${path}`, {
          toolName: pluginOptions.packageName,
        });

        createPage<GatsbyMarkdownFilePageContext>({
          path,
          context: {
            siteMetadata,
            id: node.id,
            name,
            displayName,
            dirName: getDirNameFromRelativePath(node.relativePath),
            fileId: node.id,
            layout: 'DOCS',
            locale,
          },
          component: markdownTemplate,
        });
      });
    }

    /**
     * Create Design System pages
     */
    if (pluginOptions.enableDesignSystemPages) {
      const designSystemPagesData = await graphql<{
        allFile: { nodes: { id: string; name: string; absolutePath: string; relativePath: string }[] };
      }>(`
        query GatsbyNodeDesignSystemFiles {
          allFile(filter: { sourceInstanceName: { eq: "DESIGN_SYSTEM_DOCS" }, name: { glob: "*.page" } }) {
            nodes {
              id
              name
              absolutePath
              relativePath
            }
          }
        }
      `);
      designSystemPagesData?.data?.allFile.nodes.forEach((node, index) => {
        const dir = `design-system/${node.relativePath.replace(/\/(.+)/, '/').replace(`${node.name}.tsx`, '')}`;
        const formattedNodeName = kebab(node.name.replace('.page', '').replace('home', ''));
        const displayName = formattedNodeName ? `Design System - ${pascal(formattedNodeName)}` : `Design System`;
        const path = `${dir}${formattedNodeName}`;

        log(`Creating design system page: ${path}`, {
          toolName: pluginOptions.packageName,
        });

        createPage<GatsbySrcPageContext>({
          path,
          context: {
            siteMetadata,
            id: node.id,
            name: node.name,
            displayName,
            dirName: getDirNameFromRelativePath(node.relativePath),
            fileId: node.id,
            layout: 'DESIGN_SYSTEM',
            locale: SITE_LANGUAGES.EN,
          },
          component: node.absolutePath,
        });
      });
    }
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

function getDirNameForSourceInstance(sourceInstanceName: SOURCE_INSTANCE_NAME): string {
  switch (sourceInstanceName) {
    case SOURCE_INSTANCE_NAME.DOCS: {
      return 'docs/';
    }
    case SOURCE_INSTANCE_NAME.MDX_PAGES: {
      return '';
    }
    case SOURCE_INSTANCE_NAME.MONO_REPO_DOCS: {
      return 'core-docs/';
    }
    case SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS: {
      return 'design-system/';
    }
    default: {
      return '';
    }
  }
}

/**
 * Process Src Pages and inject the mandatory site metadata and context.
 * This is neccessary because gatsby automatically create pages from /src/pages and there is an issue with overriding the
 * default behavior with gatsby-config-ts
 * @see https://github.com/newrade/newrade/issues/211
 */
export const onCreatePageFunction: GatsbyNode['onCreatePage'] = ({ page, actions }, options) => {
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;
  const { createPage, deletePage } = actions;

  // recreate only if a page is missing context data
  if (page && page.context && !(page.context as any).siteMetadata) {
    log(`Recreating page: ${page.path}`, {
      toolName: pluginOptions.packageName,
      level: LOG_LEVEL.INFO,
    });

    // TODO: fix when pages are not prefixed by fr but still meant to be in fr
    // also need to recreate path like the docs pages above
    const locale = /fr\.+/.test(page.path) ? SITE_LANGUAGES.FR : SITE_LANGUAGES.EN;
    const path = `${getLocaleDirName(page.path, locale)}${page.path}`;

    deletePage(page);

    createPage<GatsbySrcPageContext>({
      ...page,
      path,
      context: {
        ...page.context,
        id: page.path,
        name: getPageFormattedName(page.path),
        displayName: getPageFormattedName(page.path, {
          locale: locale,
        }),
        dirName: getDirNameFromRelativePath(page.path),
        siteMetadata,
        fileId: '',
        locale,
        layout: 'SITE',
      },
    });
  }
};
