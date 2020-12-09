import { PluginRef } from 'gatsby';
import path from 'path';
import { SOURCE_INSTANCE_NAME } from '../config/source-instances';

/**
 * Create only .tsx pages found under /src/pages.
 * .md and .mdx files are handled by source-plugin with gatsby-plugin-mdx separately
 */
export function getGastbyPluginPageCreatorConfig(options?: any): PluginRef[] {
  return [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve('src', 'pages'),
        ignore: [`**/*.treat.ts`, `**/*.mdx`, `**/*.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.MDX_PAGES,
        path: path.resolve('src', 'pages'),
        ignore: [`**/*.ts?x`],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve('src', 'pages'),
        ignore: [`**/*.treat.ts`, `**/*.tsx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.PACKAGE_DOCS,
        path: path.resolve('src', 'docs'),
        ignore: [`**/*.ts?x`],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve('src', 'docs'),
        ignore: [`**/*.treat.ts`, `**/*.tsx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.DOCS,
        path: path.resolve('..', '..', 'docs'),
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve('..', '..', 'docs'),
        ignore: [`**/*.treat.ts`, `**/*.tsx`],
      },
    },
  ];
}
