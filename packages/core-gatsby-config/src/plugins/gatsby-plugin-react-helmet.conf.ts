import Gatsby from 'gatsby';

/**
 * gatsby-plugin-react-helmet
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
 * @see https://github.com/nfl/react-helmet
 */
export function getGatsbyPluginReactHelmet(): Gatsby.PluginRef {
  return {
    resolve: 'gatsby-plugin-react-helmet',
  };
}
