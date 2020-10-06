import {
  GastbySiteConfig,
  getGatsbyReactSvgConfig,
  getGatsbyTsPluginConfig,
  SITE_LANGUAGES,
} from '@newrade/core-gatsby-config';
import * as dotenv from 'dotenv';
import path from 'path';
import { ENV } from './types/dot-env';

// TODO move to a different file
const env = loadDotEnv();
export function loadDotEnv() {
  // add env variables from .env file
  dotenv.config({
    path: path.resolve(__dirname, '.env'),
  });

  return process.env as ENV;
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config: GastbySiteConfig = {
  siteMetadata: {
    title: `core-gatsby-website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.SITE_URL,
    languages: {
      langs: [SITE_LANGUAGES.FR, SITE_LANGUAGES.EN],
      defaultLangKey: SITE_LANGUAGES.FR,
    },
  },
  plugins: [
    getGatsbyTsPluginConfig(),
    getGatsbyReactSvgConfig(),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * gatsby-source-graphcms
     * @see https://github.com/GraphCMS/gatsby-source-graphcms/tree/next/gatsby-source-graphcms
     */
    // {
    //   resolve: 'gatsby-source-graphcms',
    //   options: {
    //     downloadLocalImages: true,
    //     buildMarkdownNodes: true,
    //     endpoint: env.GRAPH_CMS_API_URL_CORE,
    //     token: env.GRAPH_CMS_AUTH_TOKEN_CORE,
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: env.GRAPH_CMS_API_URL_CORE,
        headers: {
          Authorization: `bearer ${env.GRAPH_CMS_AUTH_TOKEN_CORE}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
    /**
     * gatsby-plugin-react-helmet
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
     * @see https://github.com/nfl/react-helmet
     */
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
  ],
};

export default config;
