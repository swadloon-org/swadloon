import Gatsby from 'gatsby';

import { defaultPlugins } from 'core-gatsby-config';

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

const config: Gatsby.GatsbyConfig = {
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
        url: process.env.GRAPH_CMS_API_URL_MIR,
        headers: {
          Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_MIR}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/illustrations/Logo/LogoFavicon.png`,
      },
    },
  ],
};

export default config;
