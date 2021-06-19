import * as common from '@newrade/core-common';
import * as core from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables, toBoolean, getAppUrl } from '@newrade/core-utils';
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
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
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
    ENABLE_GATSBY_REFRESH_ENDPOINT: toBoolean(env.ENABLE_GATSBY_REFRESH_ENDPOINT),
  },
  siteMetadata: {
    title: `Alto Infra`,
    description: `Alto Infra's website`,
    siteUrl: getAppUrl(env),
    siteEnv: env.APP_ENV,
    languages: {
      langs: [common.SITE_LANGUAGES.EN_CA, common.SITE_LANGUAGES.FR_CA],
      defaultLangKey: common.SITE_LANGUAGES.EN_CA,
    },
  },
  plugins: [
    /**
     * Project Specific Plugins
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alto Infra`,
        short_name: `Alto Infra`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1616C5`,
        display: `standalone`,
        icon: `../alto-design-system/lib/assets/logo-favicon.png`,
      },
    },
    {
      /**
       * @see https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
       */
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_ALTO,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_ALTO,
        environment: env.CONTENTFUL_ENV,
        downloadLocal: true,
      },
    },
    /**
     * Core Plugins
     */
    core.getGatsbyPluginMetaRedirect(),
    core.getGatsbyPluginLoadableComponents(),
    ...core.getGatsbyPluginTypeScriptConfig({
      documentPaths: [
        '../core-gatsby-ui/src/fragments/gatsby/**/*.{ts,tsx}',
        '../core-gatsby-ui/src/fragments/contentful/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
      ],
    }),
    core.getGatsbyPluginCatchLinks(),
    core.getGatsbyReactSvgrSvgoConfig(),
    ...core.getGastbyPluginPageCreatorConfig(),
    core.getGastbyPluginTreatConfig(),
    core.getGastbyPluginVanilla(),
    core.getGatsbyPluginPostCSS(),
    core.getGatsbyTransformerSharp(),
    core.getGatsbyPluginSharp(),
    ...core.getGatsbyPluginMdx(),
    ...core.getGatsbyImageFolder({
      pathImgDir: path.join(__dirname, `/src/images`),
    }),
    core.getGatsbyPluginReactHelmet(),
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    core.getGastbyCoreContentfulPluginConfig({
      packageName: packageJson.name,
      locales: ['fr-CA', 'en-CA'],
      features: {
        renderPages: true,
        renderBlogPosts: false,
        renderPortfolio: false,
      },
    }),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
      features: {
        renderDesignSystemPages: true,
        renderDocsPages: true,
      },
    }),
    core.getGatsbyPluginPreloadFonts(),
  ],
};

export default config;
