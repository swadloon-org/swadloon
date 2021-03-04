import * as core from '@newrade/core-gatsby-config';
import * as common from '@newrade/core-common';
import { loadDotEnv, logEnvVariables, toBoolean } from '@newrade/core-utils';
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
  flags: {
    PRESERVE_WEBPACK_CACHE: toBoolean(env.GATSBY_PRESERVE_WEBPACK_CACHE),
    PRESERVE_FILE_DOWNLOAD_CACHE: toBoolean(env.GATSBY_PRESERVE_FILE_DOWNLOAD_CACHE),
    QUERY_ON_DEMAND: toBoolean(env.GATSBY_QUERY_ON_DEMAND),
    LAZY_IMAGES: toBoolean(env.GATSBY_LAZY_IMAGES),
    PARALLEL_SOURCING: toBoolean(env.GATSBY_PARALLEL_SOURCING),
    DEV_SSR: toBoolean(env.GATSBY_DEV_SSR),
    FAST_DEV: toBoolean(env.GATSBY_FAST_DEV),
    FAST_REFRESH: toBoolean(env.GATSBY_FAST_REFRESH),
  },
  siteMetadata: {
    title: `MIR Website`,
    description: `MIR website`,
    siteUrl: env.APP_URL,
    siteEnv: env.APP_ENV,
    languages: {
      langs: [common.SITE_LANGUAGES.FR_CA, common.SITE_LANGUAGES.EN_CA],
      defaultLangKey: common.SITE_LANGUAGES.FR_CA,
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
        icon: `src/images/LogoFavicon.png`,
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
      documentPaths: ['./gatsby-*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    }),
    core.getGatsbyReactSvgConfig(),
    ...core.getGastbyPluginPageCreatorConfig(),
    core.getGastbyPluginTreatConfig(),
    core.getGatsbyTransformerSharp(),
    core.getGatsbyPluginSharp(),
    ...core.getGatsbyPluginMdx(),
    ...core.getGatsbyImageFolder({
      pathImgDir: path.join(__dirname, `/src/images`),
    }),
    core.getGatsbyPluginReactHelmet(),
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    core.getGatsbyNetlifyPlugin(),
    core.getGatsbyPluginPreloadFonts(),
    core.getGatsbyPluginGoogleTagmanager({
      googleTagId: 'GTM-T4LK3QF',
    }),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
      enableDesignSystemPages: false,
      enableDocsPages: false,
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
