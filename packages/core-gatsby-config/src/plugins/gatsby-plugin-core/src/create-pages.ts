import fsp from 'fs/promises';
import path from 'path';

import { GatsbyNode, Page } from 'gatsby';

import chalk from 'chalk';

import { AppError, ERROR_TYPE, SITE_LANGUAGES } from '@newrade/core-common';

import { SOURCE_INSTANCE_NAME } from '../../../config/gatsby-source-instances.js';
import { PAGE_TEMPLATE, PageTemplate } from '../../../config/page.props.js';
import {
  GatsbyMarkdownFilePageContext,
  GatsbySrcPageContext,
} from '../../../config/page-context.js';
import {
  GatsbyNodeAllSiteQuery,
  GatsbyNodeMarkdownFilesQuery,
  GatsbyNodeSiteMetadataFragment,
  GatsbyNodeSrcPagesFilesQuery,
} from '../../../config/site-graphql-types.js';
import {
  getFullPageNodePath,
  getLangSimpleCode,
  getLayoutForSourceInstance,
  getLayoutFromFrontmatterLayout,
  getLocaleFromPath,
  getLocalePath,
  getMatchingPageLocales,
  getPageFormattedName,
  getPathForSourceInstance,
  getTemplateForSourceInstance,
  getTemplateFromFrontmatter,
  MatchingPageOutput,
  remoteExtension,
  removeLocalePrefix,
} from '../../../utils/pages.utilities.js';
import { GatsbyCorePluginOptions } from '../gatsby-plugin-options.js';

let siteMetadata: GatsbyNodeSiteMetadataFragment | undefined;
let matchingTsxPageDirNames: MatchingPageOutput;

export const createPagesFunction: GatsbyNode['createPages'] = async (
  { actions, graphql, reporter },
  options
) => {
  const { createPage } = actions;
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;

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
        siteVersion
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
     * Query for regular tsx pages files
     */
    const srcTsxPages = await graphql<GatsbyNodeSrcPagesFilesQuery>(`
      query GatsbyNodeTsxPageFiles {
        allFile(filter: { absolutePath: { glob: "**/src/pages/**/*.tsx" } }) {
          nodes {
            id
            absolutePath
          }
        }
      }
    `);

    if (srcTsxPages?.errors) {
      if (srcTsxPages.errors.length) {
        srcTsxPages.errors.forEach((error: Error) => {
          reporter.panic(
            `[${pluginOptions.pluginName}] error in query GatsbyNodeTsxPageFiles: ${error}`
          );
        });
      }
      return;
    }

    const tsxPagesToRender = srcTsxPages?.data?.allFile?.nodes;

    /**
     * Query for markdown files
     */
    const markdownPagesData = await graphql<GatsbyNodeMarkdownFilesQuery>(`
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
            changeTime
            publicURL
            size
            sourceInstanceName
            childMdx {
              slug
              excerpt
              frontmatter {
                title
                subject
                tags
                description
                version
                published
                status
                slug
                layout
                template
                deprecated
                editPageUrl
                nextPageLabel
                nextPageUrl
                componentStatus
                componentVersion
                componentTests
                jsdocImports
              }
            }
          }
        }
      }
    `);

    if (markdownPagesData?.errors) {
      if (markdownPagesData.errors.length) {
        markdownPagesData.errors.forEach((error: Error) => {
          reporter.panic(
            `[${pluginOptions.pluginName}] error in query GatsbyNodeMarkdownFiles: ${error}`
          );
        });
      }
      return;
    }

    const markdownPagesToRender = markdownPagesData?.data?.allFile?.nodes.filter((node) => {
      if (node.sourceInstanceName === SOURCE_INSTANCE_NAME.MDX_PAGES) {
        return pluginOptions.renderMarkdownPages;
      }

      if (node.sourceInstanceName === SOURCE_INSTANCE_NAME.DOCS) {
        return pluginOptions.renderDocsPages;
      }

      if (node.sourceInstanceName === SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS) {
        return pluginOptions.renderDesignSystemPages;
      }

      if (node.sourceInstanceName === SOURCE_INSTANCE_NAME.MONO_REPO_DOCS) {
        return pluginOptions.renderCoreDocsPages;
      }

      return true;
    });

    if (!markdownPagesToRender?.length) {
      reporter.info(`[${pluginOptions.pluginName}] no markdown files found for pages`);
      return;
    }

    reporter.info(
      `[${pluginOptions.pluginName}] got ${markdownPagesData?.data?.allFile?.nodes?.length} files for markdown pages`
    );

    /**
     * Organise files to create pages.
     *
     * Markdown files are formatted as follow:
     * `/<locale>/<source-instance-dir>/<mdx-slug`
     * for example `fr.markdown.mdx` in `/docs` would become `/fr/docs/markdown`
     */

    let markdownDocsTemplate: string = '';
    try {
      await fsp.readFile(`src/templates/docs.template.tsx`);
      reporter.info(`[${pluginOptions.pluginName}] found docs template in package`);
      markdownDocsTemplate = path.resolve(`src/templates/docs.template.tsx`);
    } catch (error: any) {
      reporter.info(`[${pluginOptions.pluginName}] no template defined for docs in package`);
    }

    if (!markdownDocsTemplate) {
      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/docs.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default docs template`);
        markdownDocsTemplate = path.resolve(`../core-gatsby-ui/src/templates/docs.template.tsx`);
      } catch (error: any) {
        reporter.panic(
          `[${pluginOptions.pluginName}] no default template defined for markdown-docs`
        );
      }
    }

    let markdownPageTemplate: string = '';
    try {
      await fsp.readFile(`src/templates/markdown-page.template.tsx`);
      reporter.info(`[${pluginOptions.pluginName}] found markdown-page template in package`);
      markdownPageTemplate = path.resolve(`src/templates/markdown-page.template.tsx`);
    } catch (error: any) {
      reporter.info(
        `[${pluginOptions.pluginName}] no template defined for markdown-page in package`
      );
    }

    if (!markdownPageTemplate) {
      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/markdown-page.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default markdown-page template`);
        markdownPageTemplate = path.resolve(
          `../core-gatsby-ui/src/templates/markdown-page.template.tsx`
        );
      } catch (error: any) {
        reporter.panic(
          `[${pluginOptions.pluginName}] no default template defined for markdown-page`
        );
      }
    }

    let designSystemPageTemplate: string = '';
    try {
      await fsp.readFile(`src/templates/design-system-page.template.tsx`);
      reporter.info(`[${pluginOptions.pluginName}] found design-system-page template in package`);
      designSystemPageTemplate = path.resolve(`src/templates/design-system-page.template.tsx`);
    } catch (error: any) {
      reporter.info(
        `[${pluginOptions.pluginName}] no template defined for design-system-page in package`
      );
    }

    /**
     * Allow to set a custom template for design system pages
     *
     * Right now we use the docs template (design-system-page.template.tsx is not created in core-gatsby-ui)
     */
    if (!designSystemPageTemplate) {
      try {
        await fsp.readFile(`../core-gatsby-ui/src/templates/docs.template.tsx`);
        reporter.info(`[${pluginOptions.pluginName}] using default design-system-page template`);
        designSystemPageTemplate = path.resolve(
          `../core-gatsby-ui/src/templates/docs.template.tsx`
        );
      } catch (error: any) {
        reporter.panic(
          `[${pluginOptions.pluginName}] no default template defined for design-system-page`
        );
      }
    }

    // prepare page object for creation
    const markdownPages = markdownPagesToRender.map((node, index) => {
      // if `renderUnpublishedDocsPages` === false, don't render pages marked with `published: 'false'`
      const renderUnpublishedDocsPages = pluginOptions.renderUnpublishedPages;
      if (!renderUnpublishedDocsPages) {
        if (node.childMdx?.frontmatter?.published === 'false') {
          reporter.info(
            `[${pluginOptions.pluginName}] ignoring ${node.name} (publish is ${node.childMdx?.frontmatter?.published})`
          );
          return;
        }
      }

      const sourceInstance = node.sourceInstanceName as SOURCE_INSTANCE_NAME;

      // for file src/docs/section/en.readme.mdx

      // 'docs'
      const sourceDir = getPathForSourceInstance(sourceInstance);
      // 'en'
      const localeDir = getLocalePath(
        node.name,
        siteMetadata?.languages?.defaultLangKey || SITE_LANGUAGES.EN
      );
      // 'en.readme'
      const nodePath = node.childMdx?.slug;
      // name without locale e.g 'readme'
      const nameWithoutLocale = removeLocalePrefix(nodePath || node.name);
      // override the path if set in the document
      const frontmatterSlug = node.childMdx?.frontmatter?.slug;
      // 'docs/en/section/readme'
      const path = frontmatterSlug
        ? frontmatterSlug
        : getFullPageNodePath([localeDir, sourceDir, nameWithoutLocale]);
      // SITE_LANGUAGES.EN
      const locale = getLocaleFromPath(
        node.name,
        siteMetadata?.languages.defaultLangKey || SITE_LANGUAGES.EN
      );
      // raw node name e.g. 'en.readme'
      const name = node.name;
      // nicely formated name for the node, defaults to frontmatter property e.g. 'Readme'
      const displayName = getPageFormattedName(
        node.childMdx?.frontmatter?.title || nameWithoutLocale,
        {
          locale: locale,
        }
      );

      // check if the page has frontmatter.layout set, if so
      // verify it and return, othewise fallback to getting it with `sourceInstance`
      const layout =
        getLayoutFromFrontmatterLayout(node.childMdx?.frontmatter?.layout) ||
        getLayoutForSourceInstance(sourceInstance);
      // check if the page has frontmatter.layout set, if so
      // verify it and return, othewise fallback to getting it with `sourceInstance`
      const template =
        getTemplateFromFrontmatter(node.childMdx?.frontmatter?.template) ||
        getTemplateForSourceInstance(sourceInstance);
      // if the template is known, return the correct component template path for the page othewise fallback to getting it with sourceInstance
      // verify it and return, othewise fallback to getting it with `sourceInstance`
      const component =
        getComponentForTemplate(template) || getComponentForSourceInstanceName(sourceInstance);

      const jsdocImports = node.childMdx?.frontmatter?.jsdocImports || [];

      reporter.info(
        `[${pluginOptions.pluginName}] create page: layout: ${chalk.redBright(
          layout
        )}, template: ${chalk.blue(template)}, component: ${chalk.greenBright(
          component.replace(/\/.+\//gi, '')
        )},  path: ${chalk.blueBright(path)}`
      );

      return {
        path,
        context: {
          siteMetadata,
          id: node.id,
          name,
          displayName,
          fileId: node.id,
          jsdocImports: jsdocImports,
          locale,
          relativePath: node.relativePath,
          absolutePath: node.absolutePath,
          layout,
          sourceInstance,
          template,
          frontmatter: node.childMdx?.frontmatter,
          excerpt: node.childMdx?.excerpt,
          timeToRead: node.childMdx?.timeToRead,
          tableOfContents: node.childMdx?.tableOfContents,
          body: node.childMdx?.body,
        },
        component,
      } as Page<GatsbyMarkdownFilePageContext>;
    });

    const matchingMarkdownPageDirNames = getMatchingPageLocales(markdownPages);

    // save tsx alternate locale pages for later
    matchingTsxPageDirNames = getMatchingPageLocales(
      tsxPagesToRender?.map((rawPage) => {
        // 'dir/en.index.tsx'
        const pathWithExtension = rawPage.absolutePath.replace(/.+\/src\/pages/i, '');
        // 'dir/en.index'
        const pathWithoutExtension = remoteExtension(pathWithExtension);
        // name without locale e.g 'readme'
        const nameWithoutLocale = removeLocalePrefix(pathWithoutExtension);
        // 'en'
        const localeDir = getLocalePath(
          pathWithoutExtension,
          siteMetadata?.languages?.defaultLangKey || SITE_LANGUAGES.EN
        );
        // 'docs/en/section/readme'
        const path = getFullPageNodePath([localeDir, '', nameWithoutLocale]);
        // SITE_LANGUAGES.EN
        const locale = getLocaleFromPath(
          pathWithoutExtension,
          siteMetadata?.languages?.defaultLangKey || SITE_LANGUAGES.EN
        );

        return {
          id: rawPage.id,
          path: path,
          context: {
            absolutePath: rawPage.absolutePath,
            locale: locale,
          },
        };
      })
    );

    markdownPages.forEach((page) => {
      if (!page) {
        return;
      }

      const pagesInOtherLocales = matchingMarkdownPageDirNames?.[page.context.absolutePath]?.filter(
        (matchinPage) =>
          matchinPage.locale !== page.context.locale ||
          getLangSimpleCode(matchinPage.locale) !== getLangSimpleCode(page.context.locale)
      );

      if (pagesInOtherLocales?.length) {
        reporter.info(
          `[${pluginOptions.pluginName}] page ${
            page.path
          } has alternate locales: ${pagesInOtherLocales?.map((page) => page.path)}`
        );

        createPage<GatsbyMarkdownFilePageContext>({
          ...page,
          context: {
            ...page.context,
            alternateLocales: pagesInOtherLocales,
          },
        });
        return;
      }

      createPage<GatsbyMarkdownFilePageContext>(page);
    });

    function getComponentForTemplate(template?: PAGE_TEMPLATE | null) {
      if (!template) {
        return undefined;
      }

      switch (template) {
        case PageTemplate.default:
        case PageTemplate.blogPost: // not supported yet
        case PageTemplate.markdownPage: {
          return markdownPageTemplate;
        }
        case PageTemplate.markdownDoc: {
          return markdownDocsTemplate;
        }
        case PageTemplate.designSystem: {
          return designSystemPageTemplate;
        }
        case PageTemplate.contentfulPage: // handled in another plugin
        default: {
          return undefined;
        }
      }
    }

    function getComponentForSourceInstanceName(sourceInstanceName: SOURCE_INSTANCE_NAME) {
      return sourceInstanceName === SOURCE_INSTANCE_NAME.MDX_PAGES
        ? markdownPageTemplate
        : sourceInstanceName === SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS
        ? designSystemPageTemplate
        : markdownDocsTemplate;
    }
  } catch (error: any) {
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
export const onCreatePageFunction: GatsbyNode<{}, GatsbyMarkdownFilePageContext>['onCreatePage'] = (
  { page, actions, reporter },
  options
) => {
  const pluginOptions = options as unknown as GatsbyCorePluginOptions;
  const { createPage, deletePage } = actions;
  const pluginSourceInstances = Object.keys(SOURCE_INSTANCE_NAME);

  // delete markdown pages created by the default `gatsby-plugin-page-creator`
  if (
    page &&
    page.context &&
    /.md$/.test(page.component) &&
    (!page.context.sourceInstance ||
      !pluginSourceInstances.find((source) => source === page.context.sourceInstance))
  ) {
    reporter.info(`[${pluginOptions.pluginName}] deleting and ignoring page: ${page.path}`);
    deletePage(page);
    return;
  }

  // recreate only if a page is missing context data e.g. pages that are created by the default gastby page creator
  if (page && page.context && !page.context.siteMetadata) {
    reporter.info(`[${pluginOptions.pluginName}] recreating page: ${page.path}`);

    if (page.path === '/404.html') {
      reporter.info(`[${pluginOptions.pluginName}] deleting and ignoring page: ${page.path}`);
      deletePage(page);
      return;
    }

    // for file src/pages/section/en.page.tsx

    // raw node name e.g. '/en.page.tsx/' => 'en.page.tsx'
    const nameWithoutSlashes = page.path.replace(/\//g, '');
    // '' i.e. goes to root of the site
    const sourceDir = '';
    // 'en'
    const localeDir = getLocalePath(
      page.path,
      siteMetadata?.languages?.defaultLangKey || SITE_LANGUAGES.EN
    );
    // 'en.page.tsx'
    const nodePath = nameWithoutSlashes;
    // name without locale e.g 'page'
    const nameWithoutLocale = removeLocalePrefix(nodePath);
    // '/en/section/page'
    const path = getFullPageNodePath([localeDir, sourceDir, nameWithoutLocale]);
    // SITE_LANGUAGES.EN
    const locale = getLocaleFromPath(
      page.path,
      siteMetadata?.languages?.defaultLangKey || SITE_LANGUAGES.EN
    );
    // nicely formated name for the page, e.g. en.page.tsx => Page
    const displayName = getPageFormattedName(nameWithoutLocale, {
      locale: locale,
    });

    deletePage(page);

    reporter.info(`[${pluginOptions.pluginName}] creating page: ${path}`);

    const pagesInOtherLocales = matchingTsxPageDirNames?.[page.component]?.filter(
      (matchinPage) =>
        matchinPage.locale !== locale ||
        getLangSimpleCode(matchinPage.locale) !== getLangSimpleCode(locale)
    );

    if (pagesInOtherLocales?.length) {
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
          alternateLocales: pagesInOtherLocales,
          layout: 'default',
          template: 'default',

          //
          // TODO can we have
          //

          // excerpt: node.childMdx?.excerpt,
          // timeToRead: node.childMdx?.timeToRead,
          // tableOfContents: node.childMdx?.tableOfContents,
          // body: node.childMdx?.body,
        },
      });
      return;
    }

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
