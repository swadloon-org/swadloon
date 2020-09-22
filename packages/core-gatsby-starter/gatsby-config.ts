import { GastbySiteConfig, getGatsbyTsPluginConfig, SITE_LANGUAGES, getGatsbyReactSvgConfig } from 'core-gatsby-config';
import * as dotenv from 'dotenv';
import path from 'path';
import { ENV, SITE_ENV } from './types/dot-env';
import { log } from 'core-utils';

// TODO move to a different file
const env = loadDotEnv();
export function loadDotEnv() {
  // add env variables from .env file
  dotenv.config({
    path: path.resolve(__dirname, '.env'),
  });

  return process.env as ENV;
}

log(`SITE_ENV is ${env.SITE_ENV}`, {
  toolName: 'mir-website',
});
log(`SITE_URL is ${env.SITE_URL}`, {
  toolName: 'mir-website',
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config: GastbySiteConfig = {
  siteMetadata: {
    title: `MIR Website`,
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
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: env.GRAPH_CMS_API_URL_MIR,
        headers: {
          Authorization: `bearer ${env.GRAPH_CMS_AUTH_TOKEN_MIR}`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MIR`,
        short_name: `MIR`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/illustrations/Logo/LogoFavicon.png`,
      },
    },
    /**
     * gatsby-source-graphcms
     * @see https://github.com/GraphCMS/gatsby-source-graphcms/tree/next/gatsby-source-graphcms
     */
    // {
    //   resolve: 'gatsby-source-graphcms',
    //   options: {
    //     endpoint: env.GRAPH_CMS_API_URL_MIR,
    //     token: env.GRAPH_CMS_AUTH_TOKEN_MIR,
    //   },
    // },
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
