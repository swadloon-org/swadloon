import { PluginRef } from 'gatsby';
import path from 'path';
import { SOURCE_INSTANCE_NAME } from './gatsby-source-instances';

type PluginOptions = {
  tsxPages?: boolean;
  mdxPages?: boolean;
  docsMdxPages?: boolean;
  coreDesignSystemDocsMdxPages?: boolean;
};

const defaultOptions: PluginOptions = {
  tsxPages: true,
  mdxPages: false,
  docsMdxPages: true,
  coreDesignSystemDocsMdxPages: true,
};

/**
 * Create only .tsx pages found under /src/pages.
 * .md and .mdx files are handled by source-plugin with gatsby-plugin-mdx separately
 */
export function getGastbyPluginPageCreatorConfig({
  tsxPages = defaultOptions.tsxPages,
  mdxPages = defaultOptions.mdxPages,
  docsMdxPages = defaultOptions.docsMdxPages,
  coreDesignSystemDocsMdxPages = defaultOptions.coreDesignSystemDocsMdxPages,
}: PluginOptions = defaultOptions): PluginRef[] {
  return [
    /**
     * Regular page components (e.g. page.tsx)
     */
    tsxPages
      ? {
          resolve: `gatsby-plugin-page-creator`,
          options: {
            path: path.resolve('src', 'pages'),
            ignore: [`**/*.treat.ts`, `**/*.mdx`, `**/*.md`],
          },
        }
      : null,
    /**
     * Mdx page components (e.g. page.mdx)
     */
    mdxPages
      ? {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: SOURCE_INSTANCE_NAME.MDX_PAGES,
            path: path.resolve('src', 'pages'),
            ignore: [`**/*.ts?x`],
          },
        }
      : null,
    /**
     * Mdx pages in src/docs/
     */
    docsMdxPages
      ? {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: SOURCE_INSTANCE_NAME.DOCS,
            path: path.resolve('src', 'docs'),
            ignore: [`**/*.ts?x`],
          },
        }
      : null,
    /**
     * Design system pages
     */
    coreDesignSystemDocsMdxPages
      ? {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: SOURCE_INSTANCE_NAME.DESIGN_SYSTEM_DOCS,
            path: path.resolve('..', 'core-design-system-docs', 'docs'),
            ignore: [`**/*.ts?x`],
          },
        }
      : coreDesignSystemDocsMdxPages,
  ].filter((source) => !!source) as PluginRef[];
}
