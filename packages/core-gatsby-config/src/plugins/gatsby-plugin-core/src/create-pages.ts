import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { kebab, pascal } from 'case';
import fsp from 'fs/promises';
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
import {
  getFullPageNodePath,
  getLayoutForSourceInstance,
  getLocaleFromPath,
  getLocalePath,
  getPageFormattedName,
  getPathForSourceInstance,
  getTemplateForSourceInstance,
  removeLocalePrefix,
} from '../../../utils/pages.utilities';
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

      let markdownDocsTemplate: string;
      try {
        await fsp.readFile(`src/templates/markdown-docs.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] found markdown-docs template in package`);
        markdownDocsTemplate = path.resolve(`src/templates/markdown-docs.template.tsx`);
      } catch (error) {
        reporter.info(`[${pluginOptions.pluginName}] no template defined for markdown-docs in package`);
      }

      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/markdown-docs.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default markdown-docs template`);
        markdownDocsTemplate = path.resolve(`../core-gatsby-ui/src/templates/markdown-docs.template.tsx`);
      } catch (error) {
        reporter.panic(`[${pluginOptions.pluginName}] no default template defined for markdown-docs`);
      }

      let markdownPageTemplate: string;
      try {
        await fsp.readFile(`src/templates/markdown-page.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] found markdown-docs template in package`);
        markdownDocsTemplate = path.resolve(`src/templates/markdown-page.template.tsx`);
      } catch (error) {
        reporter.info(`[${pluginOptions.pluginName}] no template defined for markdown-docs in package`);
      }

      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/markdown-page.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default markdown-docs template`);
        markdownDocsTemplate = path.resolve(`../core-gatsby-ui/src/templates/markdown-page.template.tsx`);
      } catch (error) {
        reporter.panic(`[${pluginOptions.pluginName}] no default template defined for markdown-docs`);
      }

      markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
        const sourceInstance = node.sourceInstanceName as SOURCE_INSTANCE_NAME;
        // for file src/docs/section/en.readme.mdx
        // 'docs'
        const sourceDir = getPathForSourceInstance(sourceInstance);
        // 'en'
        const localeDir = getLocalePath(node.name, siteMetadata.languages?.defaultLangKey || SITE_LANGUAGES.EN);
        // 'en.readme'
        const nodePath = node.childMdx?.slug;
        // name without locale e.g 'readme'
        const nameWithoutLocale = removeLocalePrefix(nodePath || node.name);
        // 'docs/en/section/readme'
        const path = getFullPageNodePath([localeDir, sourceDir, nameWithoutLocale]);
        // SITE_LANGUAGES.EN
        const locale = getLocaleFromPath(node.name);
        // raw node name e.g. 'en.readme'
        const name = node.name;
        // nicely formated name for the node, defaults to frontmatter property e.g. 'Readme'
        const displayName = getPageFormattedName(node.childMdx?.frontmatter?.name || nameWithoutLocale, {
          locale: locale,
        });

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
            layout: getLayoutForSourceInstance(sourceInstance),
            template: getTemplateForSourceInstance(sourceInstance),
          },
          component: sourceInstance === SOURCE_INSTANCE_NAME.MDX_PAGES ? markdownPageTemplate : markdownDocsTemplate,
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
        const dir = `design-system/${node.relativePath.replace(/\/(.+)/, '').replace(`${node.name}.tsx`, '')}`;
        const formattedNodeName = kebab(node.name.replace('.page', '').replace('home', ''));
        const displayName = formattedNodeName ? `Design System - ${pascal(formattedNodeName)}` : `Design System`;
        const path = getFullPageNodePath([dir, formattedNodeName]);

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

  // recreate only if a page is missing context data e.g. pages that are created by the default gastby page creator
  if (page && page.context && !(page.context as any).siteMetadata) {
    reporter.info(`[${pluginOptions.pluginName}] recreating page: ${page.path}`);

    // for file src/pages/section/en.page.tsx

    // raw node name e.g. '/en.page.tsx/' => 'en.page.tsx'
    const nameWithoutSlashes = page.path.replace(/\//g, '');
    // '' i.e. goes to root of the site
    const sourceDir = '';
    // 'en'
    const localeDir = getLocalePath(page.path, siteMetadata.languages?.defaultLangKey || SITE_LANGUAGES.EN);
    // 'en.page.tsx'
    const nodePath = nameWithoutSlashes;
    // name without locale e.g 'page'
    const nameWithoutLocale = removeLocalePrefix(nodePath);
    // '/en/section/page'
    const path = getFullPageNodePath([localeDir, sourceDir, nameWithoutLocale]);
    // SITE_LANGUAGES.EN
    const locale = getLocaleFromPath(page.path);

    // nicely formated name for the page, e.g. en.page.tsx => Page
    const displayName = getPageFormattedName(nameWithoutLocale, {
      locale: locale,
    });

    deletePage(page);

    reporter.info(`[${pluginOptions.pluginName}] creating page: ${path}`);

    createPage<GatsbySrcPageContext>({
      ...page,
      path,
      context: {
        ...page.context,
        id: page.path,
        name: nameWithoutSlashes,
        displayName,
        siteMetadata,
        fileId: '',
        locale,
        layout: 'default',
        template: 'default',
      },
    });
  }
};
