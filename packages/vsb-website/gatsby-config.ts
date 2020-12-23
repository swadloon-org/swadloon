import * as core from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import path from 'path';
import packageJson from './package.json';
import { Env, ENV } from './types/dot-env';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
});
logEnvVariables({ packageName: packageJson.name, env });

/**
 * Configure your Gatsby site with this file.
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config: core.GastbySiteConfig = {
  siteMetadata: {
    title: `VSB Website`,
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_VSB,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_VSB,
        environment: env.CONTENTFUL_ENV,
      },
    },
    /**
     * Core Plugins
     */
    core.getGatsbyTsPluginConfig(),
    core.getGatsbyReactSvgConfig(),
    ...core.getGastbyPluginPageCreatorConfig(),
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
    core.getGastbyCoreContentfulPluginConfig({
      packageName: packageJson.name,
      locales: ['fr-CA'],
      features: {
        blog: false,
        portfolio: false,
      },
    }),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
      modules: ['@newrade/core-gatsby-config', '@newrade/core-gatsby-ui'],
    }),

    // core.getGatsbyPluginPreloadFonts(),
  ],
};

export default config;
