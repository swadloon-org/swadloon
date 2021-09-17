import Gatsby from 'gatsby';

/**
 * Return a `gatsby-plugin-loadable-components-ssr` configuration object.
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-loadable-components-ssr/
 * @see https://loadable-components.com/
 */
export function getGatsbyPluginLoadableComponents(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-loadable-components-ssr`,
    options: {
      // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
      // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
      useHydrate: true,
    },
  };
}
