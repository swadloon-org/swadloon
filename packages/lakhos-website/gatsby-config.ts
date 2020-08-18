import Gatsby from 'gatsby';

import { defaultPlugins } from 'core-gatsby-config';

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

export const config: Gatsby.GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `An example site.`,
  },
  plugins: [
    ...defaultPlugins,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: process.env.GRAPH_CMS_API_URL_LAKHOS,
        headers: {
          Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_LAKHOS}`,
        },
      },
    },
  ],
};

export default config;
