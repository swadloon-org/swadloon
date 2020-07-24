import Gatsby from 'gatsby';

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
export const plugins = ['gatsby-plugin-typescript', 'gatsby-plugin-postcss'];

require('dotenv').config();

function getGatsbySourceGraphQLPlugin({
  typeName,
  fieldName,
  url,
}: {
  typeName: string;
  fieldName: string;
  url: string;
}): Gatsby.PluginRef {
  return {
    resolve: `gatsby-source-graphql`,
    options: {
      typeName,
      fieldName,
      url,
    },
  };
}

export const config: Gatsby.GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `An example site.`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GraphCMS`,
    //     fieldName: `gcms`,
    //     url: process.env.GRAPH_CMS_API_URL,
    //     headers: {
    //       Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN}`,
    //     },
    //   },
    // },
  ],
};

export default config;
