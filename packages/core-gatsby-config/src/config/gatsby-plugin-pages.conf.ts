import { PluginRef } from 'gatsby';
import path from 'path';
import { SOURCE_INSTANCE_NAME } from './source-instances';

/**
 * Create only .tsx pages found under /src/pages.
 * .md and .mdx files are handled by source-plugin with gatsby-plugin-mdx separately
 */
export function getGastbyPluginPageCreatorConfig(options?: any): PluginRef[] {
  return [
    /**
     * Regular page components (e.g. page.tsx)
     */
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve('src', 'pages'),
        ignore: [`**/*.treat.ts`, `**/*.mdx`, `**/*.md`],
      },
    },
    /**
     * Mdx page components (e.g. page.mdx)
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.MDX_PAGES,
        path: path.resolve('src', 'pages'),
        ignore: [`**/*.ts?x`],
      },
    },
    /**
     * Mdx pages in src/docs/
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.PACKAGE_DOCS,
        path: path.resolve('src', 'docs'),
        ignore: [`**/*.ts?x`],
      },
    },
    /**
     * Design system pages
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS,
        path: path.resolve('..', 'core-gatsby-starter', 'src', 'design-system-docs'),
      },
    },
  ];
}
