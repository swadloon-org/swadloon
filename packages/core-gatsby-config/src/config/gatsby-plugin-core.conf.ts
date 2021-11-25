import path from 'path';

import Gatsby, { PluginRef } from 'gatsby';

import {
  rehypeAutoLinkHeadingsPlugin,
  rehypeSlugPlugin,
  remarkExternalLinksPlugin,
  remarkHtmlPlugin,
  remarkTocPlugin,
  remarkWikiLinkPlugin,
} from '@newrade/core-webpack-config';

import { GatsbyCorePluginOptions } from '../plugins/gatsby-plugin-core';

import { SOURCE_INSTANCE_NAME } from './gatsby-source-instances';

const defaultOptions: Required<GatsbyCorePluginOptions> = {
  packageName: 'package',
  pluginName: 'gastby-plugin-core',

  modules: [],

  renderPages: true,
  pagesPath: path.resolve('src', 'pages'),
  pagesPathPrefix: '/',

  renderMarkdownPages: true,
  markdownPagesPath: path.resolve('src', 'pages'),
  markdownPagesPathPrefix: '/',

  renderDesignSystemPages: true,
  designSystemPagesPath: path.resolve('..', 'core-design-system-docs', 'docs'),
  designSystemPagesPathPrefix: '/design-system/',

  renderDocsPages: true,
  docsPagesPath: path.resolve('src', 'docs'),
  docsPagesPathPrefix: '/docs/',

  renderCoreDocsPages: true,
  coreDocsPagesPath: path.resolve('..', '..', 'docs'),
  coreDocsPagesPathPrefix: '/core-docs/',

  renderUnpublishedPages: true,
};

/**
 * Get a preconfigured plugin array to build documentation pages based on markdown
 * This function returns one or more `gatsby-source-filesystem` plugin to source the files, mdx/remark/rehype plugins
 * and a custom plugin that will create all the pages with the correct context.
 */
export function getGastbyCorePluginConfig({
  packageName = defaultOptions.packageName,
  pluginName = defaultOptions.pluginName,

  renderPages = defaultOptions.renderPages,
  pagesPath = defaultOptions.pagesPath,
  pagesPathPrefix = defaultOptions.pagesPathPrefix,

  renderMarkdownPages = defaultOptions.renderMarkdownPages,
  markdownPagesPath = defaultOptions.markdownPagesPath,
  markdownPagesPathPrefix = defaultOptions.markdownPagesPathPrefix,

  renderDocsPages = defaultOptions.renderDocsPages,
  docsPagesPath = defaultOptions.docsPagesPath,
  docsPagesPathPrefix = defaultOptions.docsPagesPathPrefix,

  renderDesignSystemPages = defaultOptions.renderDesignSystemPages,
  designSystemPagesPath = defaultOptions.designSystemPagesPath,
  designSystemPagesPathPrefix = defaultOptions.designSystemPagesPathPrefix,

  renderCoreDocsPages = defaultOptions.renderCoreDocsPages,
  coreDocsPagesPath = defaultOptions.coreDocsPagesPath,
  coreDocsPagesPathPrefix = defaultOptions.coreDocsPagesPathPrefix,

  renderUnpublishedPages = defaultOptions.renderUnpublishedPages,
}: GatsbyCorePluginOptions = defaultOptions): PluginRef[] {
  return [
    /**
     * Regular page components (e.g. 404.tsx)
     */
    renderPages
      ? {
          resolve: `gatsby-plugin-page-creator`,
          options: {
            name: SOURCE_INSTANCE_NAME.MDX_PAGES,
            path: pagesPath,
            ignore: [`**/*.treat.ts`, `**/*.mdx`, `**/*.md`],
          },
        }
      : null,
    /**
     * Mdx page components (e.g. 404.mdx)
     */
    renderMarkdownPages
      ? {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: SOURCE_INSTANCE_NAME.MDX_PAGES,
            path: markdownPagesPath,
            ignore: [`**/*.ts?x`],
          },
        }
      : null,
    /**
     * Mdx pages in src/docs/
     */
    renderDocsPages
      ? {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: SOURCE_INSTANCE_NAME.DOCS,
            path: docsPagesPath,
            ignore: [`**/*.ts?x`],
          },
        }
      : null,
    /**
     * Design system pages
     */
    renderDesignSystemPages
      ? {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS,
            path: designSystemPagesPath,
            ignore: [`**/*.ts?x`],
          },
        }
      : null,

    /**
     * Core packages docs
     */
    ...(renderCoreDocsPages
      ? [
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: SOURCE_INSTANCE_NAME.MONO_REPO_DOCS,
              path: coreDocsPagesPath,
              ignore: [`**/*.ts?x`],
            },
          },
          {
            resolve: 'gatsby-plugin-copy-files-enhanced',
            options: {
              source: path.join(coreDocsPagesPath, 'assets', 'fonts'),
              destination: '/core-docs-assets',
              purge: true,
            },
          },
          {
            resolve: 'gatsby-plugin-copy-files-enhanced',
            options: {
              source: path.join(coreDocsPagesPath, 'assets', 'images'),
              destination: '/core-docs-assets',
              purge: true,
            },
          },
          {
            resolve: 'gatsby-plugin-copy-files-enhanced',
            options: {
              source: path.join(coreDocsPagesPath, 'assets', 'logos'),
              destination: '/core-docs-assets',
              purge: true,
            },
          },
        ]
      : []),

    /**
     * Configure plugin
     */
    {
      resolve: require.resolve(`../plugins/gatsby-plugin-core`),
      options: {
        packageName,
        pluginName,

        renderPages,
        pagesPath,
        pagesPathPrefix,

        renderMarkdownPages,
        markdownPagesPath,
        markdownPagesPathPrefix,

        renderDocsPages,
        docsPagesPath,
        docsPagesPathPrefix,

        renderDesignSystemPages,
        designSystemPagesPath,
        designSystemPagesPathPrefix,

        renderCoreDocsPages,
        coreDocsPagesPath,
        coreDocsPagesPathPrefix,

        renderUnpublishedPages,
      } as GatsbyCorePluginOptions,
    },
    ...getGatsbyPluginMdx(),
  ].filter((source) => !!source) as PluginRef[];
}

/**
 * gatsby-plugin-mdx
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx#readme
 */
function getGatsbyPluginMdx(): Gatsby.PluginRef[] {
  return [
    /**
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx#gatsby-remark-plugins
     */
    {
      resolve: `gatsby-remark-images`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          /**
           * @see https://github.com/remcohaszing/gatsby-remark-mermaid
           * @note does not work with Gatsby
           */
          {
            resolve: 'gatsby-remark-mermaid',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              wrapperStyle: `margin-left: inherit; margin-right: inherit;`,
            },
          },
          /**
           * @see https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files
           */
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'markdown-assets',
              ignoreFileExtensions: [],
            },
          },
        ],
        /**
         * @see https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins
         * @seee node_modules/@mdx-js/mdx/index.js
         */
        remarkPlugins: [
          remarkWikiLinkPlugin,
          remarkExternalLinksPlugin,
          // remarkUnwrapImagesPlugin,
          remarkHtmlPlugin,
          remarkTocPlugin,
        ].map((plugin) => {
          if (!(plugin && plugin[0])) {
            throw new Error('undefined plugin');
          }
          return plugin;
        }),
        // see https://github.com/rehypejs/rehype/blob/master/doc/plugins.md#list-of-plugins
        rehypePlugins: [rehypeSlugPlugin, rehypeAutoLinkHeadingsPlugin],
      },
    },
  ];
}
