import Gatsby from 'gatsby';

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
export const plugins = ['gatsby-plugin-typescript', 'gatsby-plugin-postcss'];

export const config: Gatsby.GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `An example site.`,
  },
};

export default config;
