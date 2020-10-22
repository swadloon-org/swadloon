import Gatsby from 'gatsby';

/**
 * gatsby-plugin-preload-fonts
 *
 * note: refresh font by running the preload-fonts script
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts
 */
export function getGatsbyPluginPreloadFonts(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-preload-fonts`,
    options: {},
  };
}
