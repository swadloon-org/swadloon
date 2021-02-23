import { AppError, ERROR_TYPE } from '@newrade/core-common';
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
import { getLocalePath, getPageFormattedName, getPathForSourceInstance } from '../../../utils/dir-name.utilities';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }, options) => {
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

    /**
     * Render Markdown pages
     */
    if (pluginOptions.features.renderDocsPages) {
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

      reporter.info(
        `[${pluginOptions.pluginName}] got ${markdownFilesData?.data?.allFile?.nodes?.length} files for markdown pages`
      );

      /**
       * Organise files to create pages.
       *
       * Markdown files are formatted as follow:
       * `/<locale>/<source-instance-dir>/<mdx-slug`
       * for example `fr.markdown.mdx` in `/docs` would become `/fr/docs/markdown`
       */
      const markdownTemplate = path.resolve(`../core-gatsby-ui/src/templates/markdown.template.tsx`);

      markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
        // docs
        const sourceDir = getPathForSourceInstance(node.sourceInstanceName as SOURCE_INSTANCE_NAME);
        // fr
        const localeDir = getLocalePath(node.name, siteMetadata.languages?.defaultLangKey || SITE_LANGUAGES.EN);
        // readme
        const nodePath = node.childMdx?.slug;
        // docs/fr/readme
        const path = [localeDir, sourceDir, nodePath].filter((part) => !!part).join('/');
        const locale = /fr\.+/.test(node.name) ? SITE_LANGUAGES.FR : SITE_LANGUAGES.EN;
        const name = `${title(node.childMdx?.frontmatter?.name || node.name)}`;
        const displayName = name;

        reporter.info(`[${pluginOptions.pluginName}] creating markdown page ${path}`);

        createPage<GatsbyMarkdownFilePageContext>({
          path,
          context: {
            siteMetadata,
            id: node.id,
            name,
            displayName,
            fileId: node.id,
            locale,
            layout: 'docs',
            template: 'markdownDoc',
          },
          component: markdownTemplate,
        });
      });
    }

    /**
     * Create Design System pages
     */
    if (pluginOptions.features.renderDesignSystemPages) {
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

        reporter.info(`[${pluginOptions.pluginName}] creating design system page: ${path}`);

        createPage<GatsbySrcPageContext>({
          path,
          context: {
            siteMetadata,
            id: node.id,
            name: node.name,
            displayName,
            fileId: node.id,
            locale: SITE_LANGUAGES.EN,
            layout: 'designSystem',
            template: 'designSystem',
          },
          component: node.absolutePath,
        });
      });
    }
  } catch (error) {
    reporter.error(`[${pluginOptions.pluginName}] error occured when generating pages: ${error}`);
    reporter.panic(error);
  }
};

/**
 * Process Src Pages and inject the mandatory site metadata and context.
 * This is neccessary because gatsby automatically create pages from /src/pages and there is an issue with overriding the
 * default behavior with gatsby-config-ts
 * @see https://github.com/newrade/newrade/issues/211
 */
export const onCreatePageFunction: GatsbyNode['onCreatePage'] = ({ page, actions, reporter }, options) => {
  const pluginOptions = (options as unknown) as GatsbyCorePluginOptions;
  const { createPage, deletePage } = actions;

  // recreate only if a page is missing context data
  if (page && page.context && !(page.context as any).siteMetadata) {
    reporter.info(`[${pluginOptions.pluginName}] recreating page: ${page.path}`);

    // TODO: fix when pages are not prefixed by fr but still meant to be in fr
    // also need to recreate path like the docs pages above
    const locale = /fr\.+/.test(page.path) ? SITE_LANGUAGES.FR : SITE_LANGUAGES.EN;
    const path = `${getLocalePath(page.path, locale)}${page.path}`;

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
        siteMetadata,
        fileId: '',
        locale,
        layout: 'default',
        template: 'default',
      },
    });
  }
};
