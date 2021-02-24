import * as core from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables, toBoolean } from '@newrade/core-utils';
import proxy from 'http-proxy-middleware';
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
    title: `VSB Website`,
    description: `Dr. Boucher Clinic's website`,
    siteUrl: env.APP_URL,
    siteEnv: env.APP_ENV,
    languages: {
      langs: [core.SITE_LANGUAGES.FR],
      defaultLangKey: core.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
    /**
     * Project Specific Plugins
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vasectomie Dr. Pierre Jr. Boucher`,
        short_name: `Vasectomie Dr. Pierre Jr. Boucher`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#7c997d`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      /**
       * @see https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
       */
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_VSB,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_VSB,
        environment: env.CONTENTFUL_ENV,
        downloadLocal: true,
      },
    },
    /**
     * Core Plugins
     */
    ...core.getGatsbyPluginTypeScriptConfig({
      documentPaths: [
        '../core-gatsby-ui/src/fragments/gatsby/**/*.{ts,tsx}',
        '../core-gatsby-ui/src/fragments/contentful/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
      ],
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
    // core.getGastbyCoreContentfulPluginConfig({
    //   packageName: packageJson.name,
    //   locales: ['fr-CA'],
    //   features: {
    //     renderPages: true,
    //     renderBlogPosts: false,
    //     renderPortfolio: false,
    //   },
    // }),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
      features: {
        renderDesignSystemPages: true,
        renderDocsPages: true,
      },
    }),
    core.getGatsbyPluginPreloadFonts(),
  ],
  /**
   * Mimic the same route that we have when deployed
   * @see https://github.com/chimurai/http-proxy-middleware/tree/v0.21.0#readme
   */
  developMiddleware: (app) => {
    app.use(
      '/api/server/',
      proxy({
        target: 'http://localhost:10003',
      })
    );
  },
};

export default config;
