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
    title: `MIR Website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.APP_URL,
    siteEnv: env.APP_ENV,
    languages: {
      langs: [core.SITE_LANGUAGES.FR_CA, core.SITE_LANGUAGES.EN_CA],
      defaultLangKey: core.SITE_LANGUAGES.FR_CA,
    },
  },
  plugins: [
    /**
     * Project Specific Plugins
     */
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_MIR,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_MIR,
        environment: env.CONTENTFUL_ENV,
      },
    },
    /**
     * Core Plugins
     */
    ...core.getGatsbyPluginTypeScriptConfig({
      documentPaths: ['../core-gatsby-ui/src/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    }),
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
    core.getGatsbyPluginPreloadFonts(),
    core.getGatsbyPluginGoogleTagmanager({
      googleTagId: 'GTM-T4LK3QF',
    }),
    core.getGastbyCoreContentfulPluginConfig({
      packageName: packageJson.name,
      features: {
        blog: true,
        portfolio: false,
      },
    }),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
      modules: ['@newrade/core-gatsby-config', '@newrade/core-gatsby-ui'],
    }),
    /**
     * gatsby-plugin-csp
     *
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-csp/
     */
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: false,
    //     mergeScriptHashes: true,
    //     mergeStyleHashes: false,
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       'script-src': "'self'",
    //       'style-src': "'self' 'unsafe-inline'",
    //       'img-src': "'self' data: https://media.graphcms.com https://images.unsplash.com",
    //       'font-src': "'self' data: https://fonts.gstatic.com",
    //     },
    //   },
    // },
  ],
};

export default config;
