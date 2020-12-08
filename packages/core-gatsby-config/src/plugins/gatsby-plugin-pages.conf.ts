import path from 'path';

/**
 * Create only .tsx pages found under /src/pages.
 * .md and .mdx files are handled by source-plugin with gatsby-plugin-mdx separately
 */
export function getGastbyPluginPageCreatorConfig(options?: any) {
  return {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: path.resolve('src', 'pages'),
      ignore: [`**/*.treat.ts`, `**/*.mdx`, `**/*.md`],
    },
  };
}
