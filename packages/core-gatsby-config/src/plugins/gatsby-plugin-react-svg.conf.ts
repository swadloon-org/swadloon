import Gatsby from 'gatsby';

/**
 * Return a `gatsby-plugin-react-svg` configuration object.
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
 */
export function getGatsbyReactSvgConfig(): Gatsby.PluginRef {
  return {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.svg$/,
      },
    },
  };
}
