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
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config: core.GastbySiteConfig = {
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
     * Core Plugins
     */
    core.getGastbyCorePluginConfig(),
    core.getGatsbyTsPluginConfig(),
    core.getGatsbyReactSvgConfig(),
    core.getGastbyPluginPageCreatorConfig(),
    core.getGastbyPluginTreatConfig(),
    core.getGatsbyTransformerSharp(),
    core.getGatsbyPluginSharp(),
    core.getGastbyPluginTreatConfig(),
    // core.getGatsbyPluginMdx(),
    core.getGatsbyImageFolder(),
    core.getGatsbyPluginReactHelmet(),
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    core.getGatsbyNetlifyPlugin(),
    // core.getGatsbyPluginPreloadFonts(),
    /**
     * Project Specific Plugins
     */
    core.getGatsbyImageFolder({
      pathImgDir: path.join(__dirname, `src`, `images`),
    }),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packageDocs`,
        path: `${__dirname}/src/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/../../docs/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/src/docs/`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/../../docs/`,
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_NEWRADE,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_NEWRADE,
        environment: 'master',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          packageDocs: require.resolve('./src/templates/markdown.template.tsx'),
          docs: require.resolve('./src/templates/markdown.template.tsx'),
          default: require.resolve('./src/templates/markdown.template.tsx'),
        },
      },
    },
  ],
};

export default config;
