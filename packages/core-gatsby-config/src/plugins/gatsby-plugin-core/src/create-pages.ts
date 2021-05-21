import { AppError, ERROR_TYPE, SITE_LANGUAGES } from '@newrade/core-common';
import chalk from 'chalk';
import fsp from 'fs/promises';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { SOURCE_INSTANCE_NAME } from '../../../config/gatsby-source-instances';
import { GatsbyMarkdownFilePageContext, GatsbySrcPageContext } from '../../../config/page-config';
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeMarkdownFilesQuery,
  GatsbyNodeSiteMetadataFragment,
} from '../../../config/site-graphql-types';
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

export const createPagesFunction: GatsbyNode['createPages'] = async (
  { actions, graphql, reporter },
  options
) => {
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
          allFile(
            filter: {
              sourceInstanceName: {
                in: ["MONO_REPO_DOCS", "DOCS", "DESIGN_SYSTEM_DOCS", "MDX_PAGES"]
              }
              ext: { in: [".md", ".mdx"] }
            }
          ) {
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
        await fsp.readFile(`src/templates/docs.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] found docs template in package`);
        markdownDocsTemplate = path.resolve(`src/templates/docs.template.tsx`);
      } catch (error) {
        reporter.info(`[${pluginOptions.pluginName}] no template defined for docs in package`);
      }

      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/docs.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default docs template`);
        markdownDocsTemplate = path.resolve(`../core-gatsby-ui/src/templates/docs.template.tsx`);
      } catch (error) {
        reporter.panic(
          `[${pluginOptions.pluginName}] no default template defined for markdown-docs`
        );
      }

      let markdownPageTemplate: string;
      try {
        await fsp.readFile(`src/templates/markdown-page.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] found markdown-page template in package`);
        markdownPageTemplate = path.resolve(`src/templates/markdown-page.template.tsx`);
      } catch (error) {
        reporter.info(
          `[${pluginOptions.pluginName}] no template defined for markdown-page in package`
        );
      }

      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/markdown-page.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default markdown-page template`);
        markdownPageTemplate = path.resolve(
          `../core-gatsby-ui/src/templates/markdown-page.template.tsx`
        );
      } catch (error) {
        reporter.panic(
          `[${pluginOptions.pluginName}] no default template defined for markdown-page`
        );
      }

      let designSystemPageTemplate: string;
      try {
        await fsp.readFile(`src/templates/design-system-page.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] found design-system-page template in package`);
        designSystemPageTemplate = path.resolve(`src/templates/design-system-page.template.tsx`);
      } catch (error) {
        reporter.info(
          `[${pluginOptions.pluginName}] no template defined for design-system-page in package`
        );
      }

      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/design-system-page.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default design-system-page template`);
        designSystemPageTemplate = path.resolve(
          `../core-gatsby-ui/src/templates/design-system-page.template.tsx`
        );
      } catch (error) {
        reporter.panic(
          `[${pluginOptions.pluginName}] no default template defined for design-system-page`
        );
      }

      markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
        const sourceInstance = node.sourceInstanceName as SOURCE_INSTANCE_NAME;
        // for file src/docs/section/en.readme.mdx

        // 'docs'
        const sourceDir = getPathForSourceInstance(sourceInstance);
        // 'en'
        const localeDir = getLocalePath(
          node.name,
          siteMetadata.languages?.defaultLangKey || SITE_LANGUAGES.EN
        );
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
        const displayName = getPageFormattedName(
          node.childMdx?.frontmatter?.name || nameWithoutLocale,
          {
            locale: locale,
          }
        );

        const layout = getLayoutForSourceInstance(sourceInstance);
        const template = getTemplateForSourceInstance(sourceInstance);
        const component =
          sourceInstance === SOURCE_INSTANCE_NAME.MDX_PAGES
            ? markdownPageTemplate
            : sourceInstance === SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS
            ? designSystemPageTemplate
            : markdownDocsTemplate;

        reporter.info(
          `[${pluginOptions.pluginName}] create page: layout: ${chalk.redBright(
            layout
          )}, template: ${chalk.blue(template)}, component: ${chalk.greenBright(
            component.replace(/\/.+\//gi, '')
          )},  path: ${chalk.blueBright(path)}`
        );

        createPage<GatsbyMarkdownFilePageContext>({
          path,
          context: {
            siteMetadata,
            id: node.id,
            name,
            displayName,
            fileId: node.id,
            locale,
            layout,
            template,
          },
          component,
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
export const onCreatePageFunction: GatsbyNode['onCreatePage'] = (
  { page, actions, reporter },
  options
) => {
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
    const localeDir = getLocalePath(
      page.path,
      siteMetadata.languages?.defaultLangKey || SITE_LANGUAGES.EN
    );
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
