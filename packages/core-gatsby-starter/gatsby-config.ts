import * as core from '@newrade/core-gatsby-config';
import { SOURCE_INSTANCE_NAME } from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import path from 'path';
import packageJson from './package.json';
import { Env, ENV } from './types/dot-env';

// Set options as a parameter, environment variable, or rc file.

/**
 * Gatsby Config API
 *
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-config/
 */

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '.env'),
  packageName: packageJson.name,
});
logEnvVariables({ packageName: packageJson.name, env });

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
    title: `Core Gatsby Website`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Core Gastby Starter`,
        short_name: `Core Gastby Starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6061EC`,
        display: `standalone`,
        icon: `src/images/favicon.svg`,
        include_favicon: false,
      },
    },
    /**
     * Source markdown files at `<repo-root>/docs`
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: SOURCE_INSTANCE_NAME.MONO_REPO_DOCS,
        path: path.resolve('..', '..', 'docs'),
      },
    },
    /**
     * Newrade Contentful project
     */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_NEWRADE,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_NEWRADE,
        environment: env.CONTENTFUL_ENV,
      },
    },
    /**
     * Core Plugins
     */
    ...core.getGatsbyPluginTypeScriptConfig({
      documentPaths: [
        './src/**/*.{ts,tsx}',
        '../core-gatsby-ui/src/fragments/gatsby/**/*.{ts,tsx}',
        '../core-gatsby-ui/src/hooks/**/*.{ts,tsx}',
        '../core-gatsby-ui/src/templates/**/*.{ts,tsx}',
      ],
    }),
    ...core.getGatsbyPluginMdx(),
    core.getGatsbyReactSvgConfig(),
    ...core.getGastbyPluginPageCreatorConfig(),
    core.getGastbyPluginTreatConfig(),
    core.getGatsbyTransformerSharp(),
    core.getGatsbyPluginSharp(),
    core.getGastbyPluginTreatConfig(),
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
    //     blog: false,
    //     portfolio: false,
    //   },
    // }),
    core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
      enableDesignSystemPages: true,
      enableDocsPages: true,
    }),
    // core.getGatsbyPluginPreloadFonts(),
  ],
};

export default config;
