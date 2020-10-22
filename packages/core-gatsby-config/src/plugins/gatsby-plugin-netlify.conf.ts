import Gatsby from 'gatsby';

/**
 * gatsby-plugin-netlify
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/
 */
export function getGatsbyNetlifyPlugin(): Gatsby.PluginRef {
  return {
    resolve: `gatsby-plugin-netlify`,
    options: {
      /**
       * option to add more headers. `Link` headers are transformed by the below criteria
       */
      headers: {
        '/*': ['X-Frame-Option: DENY', 'X-Content-Type-Options: nosniff'],
      },
      /**
       * option to add headers for all pages. `Link` headers are transformed by the below criteria
       */
      allPageHeaders: [],
      /**
       * boolean to turn off the default security headers
       */
      mergeSecurityHeaders: true,
      /**
       * boolean to turn off the default gatsby js headers
       */
      mergeLinkHeaders: true,
      /**
       * boolean to turn off the default caching headers
       */
      mergeCachingHeaders: true,
      /**
       * optional transform for manipulating headers under each path (e.g.sorting), etc.
       * @see https://docs.netlify.com/routing/headers/
       */
      transformHeaders: (headers: any, path: any) => headers,
      /**
       * boolean to turn off automatic creation of redirect rules for client only paths
       */
      generateMatchPathRewrites: true,
    },
  };
}
