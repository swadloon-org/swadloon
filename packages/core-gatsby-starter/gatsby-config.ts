import * as core from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
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
const config: core.GastbySiteConfig = {
  siteMetadata: {
    title: `core-gatsby-website`,
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
     * Test
     */

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
