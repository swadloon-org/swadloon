import * as core from '@newrade/core-gatsby-config';
import { SOURCE_INSTANCE_NAME } from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import path from 'path';
import packageJson from './package.json';
import { Env, ENV } from './types/dot-env';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
});
logEnvVariables<ENV>({ packageName: packageJson.name, env });

/**
 * Configure your Gatsby site with this file.
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config: core.GastbySiteConfig = {
  siteMetadata: {
    title: `Valentine Website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.APP_URL,
    siteEnv: env.APP_ENV,
    languages: {
      langs: [core.SITE_LANGUAGES.FR, core.SITE_LANGUAGES.EN],
      defaultLangKey: core.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
    /**
     * Project Specific Plugins
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.MDX_PAGES,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/*.ts?x`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.PACKAGE_DOCS,
        path: `${__dirname}/src/docs/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_VALENTINE,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_VALENTINE,
        environment: 'master',
      },
    },
    /**
     * Core Plugins
     */
    core.getGatsbyTsPluginConfig(),
    core.getGatsbyReactSvgConfig(),
    core.getGastbyPluginPageCreatorConfig(),
    core.getGastbyPluginTreatConfig(),
    core.getGatsbyTransformerSharp(),
    core.getGatsbyPluginSharp(),
    core.getGastbyPluginTreatConfig(),
    core.getGatsbyPluginMdx(),
    core.getGatsbyImageFolder(),
    core.getGatsbyPluginReactHelmet(),
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    core.getGatsbyNetlifyPlugin(),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
    }),
    // core.getGatsbyPluginPreloadFonts(),
  ],
};

export default config;
