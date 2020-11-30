import * as core from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import Gatsby from 'gatsby';
import path from 'path';
import packageJson from './package.json';
import { ENV } from './types/dot-env';

const env = loadDotEnv<ENV>(path.resolve(__dirname, '.env'));
logEnvVariables<ENV>({ packageName: packageJson.name, env });

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
export const config: Gatsby.GatsbyConfig = {
  siteMetadata: {
    title: `Newrade Website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.APP_URL,
    siteEnv: env.APP_ENV,
    languages: {
      langs: [core.SITE_LANGUAGES.FR, core.SITE_LANGUAGES.EN],
      defaultLangKey: core.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
    core.getGatsbyTsPluginConfig(),
    core.getGatsbyReactSvgConfig(),
    core.getGastbyCorePluginConfig(),
    core.getGastbyPluginTreatConfig(),
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_NEWRADE,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_NEWRADE,
        environment: 'master',
      },
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GraphCMS`,
    //     fieldName: `gcms`,
    //     url: process.env.GRAPH_CMS_API_URL_NEWRADE,
    //     headers: {
    //       Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_NEWRADE}`,
    //     },
    //   },
    // },
  ],
};

export default config;
