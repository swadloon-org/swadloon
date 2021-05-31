import Gatsby from 'gatsby';

/**
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-meta-redirect/
 */
export function getGatsbyPluginMetaRedirect(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-meta-redirect`,
    options: {},
  };
}
