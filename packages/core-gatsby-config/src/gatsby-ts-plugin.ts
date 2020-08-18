import Gatsby from 'gatsby';
import path from 'path';

/**
 * Return a `gatsby-plugin-ts` configuration object.
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-ts/
 */
export function getGatsbyTsPluginConfig(
  { fileName }: { fileName: string } = { fileName: `types/graphql-types.ts` }
): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-ts`,
    options: {
      fileName,
      failOnError: false,
    },
  };
}
