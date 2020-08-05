import Gatsby from 'gatsby';

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `src/illustrations/Icon`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[name]_[local]_[hash:base64:5]',
        },
      },
    },
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `types/graphql-types.ts`,
      },
    },
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
        icon: `src/illustrations/Logo/Square/Default.png`,
      },
    },
  ],
};

export default config;
