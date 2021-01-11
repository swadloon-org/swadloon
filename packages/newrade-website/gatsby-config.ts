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
logEnvVariables<ENV>({ packageName: packageJson.name, env });

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config: core.GastbySiteConfig = {
  flags: {
    PRESERVE_WEBPACK_CACHE: Boolean(env.GATSBY_PRESERVE_WEBPACK_CACHE),
    PRESERVE_FILE_DOWNLOAD_CACHE: Boolean(env.GATSBY_PRESERVE_FILE_DOWNLOAD_CACHE),
    QUERY_ON_DEMAND: Boolean(env.GATSBY_QUERY_ON_DEMAND),
    LAZY_IMAGES: Boolean(env.GATSBY_LAZY_IMAGES),
    PARALLEL_SOURCING: Boolean(env.GATSBY_PARALLEL_SOURCING),
    DEV_SSR: Boolean(env.GATSBY_DEV_SSR),
    FAST_DEV: Boolean(env.GATSBY_FAST_DEV),
    FAST_REFRESH: Boolean(env.GATSBY_FAST_REFRESH),
  },
  siteMetadata: {
    title: `Newrade Website`,
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
        name: `Newrade`,
        short_name: `Newrade`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6061EC`,
        display: `standalone`,
        icon: `src/images/favicon.svg`,
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_NEWRADE,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_NEWRADE,
        environment: env.CONTENTFUL_ENV,
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        // <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7954462.js"></script>,
        // disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
        id: `hs-script-loader`,
        async: 'true',
        defer: 'true',
        src: 'https://js.hs-scripts.com/7954462.js',
        // onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
    /**
     * Core Plugins
     */
    ...core.getGatsbyPluginTypeScriptConfig({
      documentPaths: ['../core-gatsby-ui/src/fragments/gatsby/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    }),
    core.getGatsbyReactSvgConfig(),
    ...core.getGastbyPluginPageCreatorConfig(),
    core.getGastbyPluginTreatConfig(),
    core.getGatsbyTransformerSharp(),
    core.getGatsbyPluginSharp(),
    core.getGastbyPluginTreatConfig(),
    ...core.getGatsbyPluginMdx(),
    ...core.getGatsbyImageFolder({
      pathImgDir: path.join(__dirname, `/src/images`),
    }),
    core.getGatsbyPluginReactHelmet(),
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    core.getGatsbyNetlifyPlugin(),
    core.getGastbyPluginLayoutCoreConfig(),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
    }),
    // core.getGatsbyPluginPreloadFonts(),
  ],
};

export default config;
