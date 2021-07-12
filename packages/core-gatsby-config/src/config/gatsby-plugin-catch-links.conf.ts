import Gatsby from 'gatsby';

/**
 * Return a `gatsby-plugin-catch-links` configuration object.
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links
 */
export function getGatsbyPluginCatchLinks(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-catch-links`,
    options: {
      // excludePattern: /(excluded-link|external)/,
    },
  };
}
