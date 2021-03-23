import Gatsby from 'gatsby';

/**
 * Return a `gatsby-plugin-react-svg` configuration object.
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-loadable-components-ssr/
 * @see https://loadable-components.com/
 */
export function getGatsbyPluginLoadableComponents(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-loadable-components-ssr`,
    options: {},
  };
}
