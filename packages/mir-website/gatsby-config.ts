import * as core from '@newrade/core-gatsby-config';
import { DEPLOY_ENV, loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import path from 'path';
import packageJson from './package.json';
import { ENV } from './types/dot-env';

const env = loadDotEnv<ENV>(path.resolve(__dirname, '.env'));
logEnvVariables<ENV>({ packageName: packageJson.name, env });

/**
 * Configure your Gatsby site with this file.
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config: core.GastbySiteConfig = {
  siteMetadata: {
    title: `MIR Website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.APP_URL || 'http://localhost:9001',
    siteEnv: env.APP_ENV || DEPLOY_ENV.DEV,
    languages: {
      langs: [core.SITE_LANGUAGES.FR, core.SITE_LANGUAGES.EN],
      defaultLangKey: core.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
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
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, 'src', 'pages'),
        ignore: [`**/*.treat.ts`],
      },
    },
    core.getGastbyCorePluginConfig(),
    core.getGatsbyTsPluginConfig(),
    core.getGatsbyReactSvgConfig(),
    core.getGatsbyImageFolder({
      pathImgDir: path.join(__dirname, `src`, `images`),
    }),
    core.getGatsbyNetlifyPlugin(),
    core.getGatsbyTransformerSharp(),
    core.getGatsbyPluginSharp(),
    core.getGastbyPluginTreatConfig(),
    core.getGatsbyPluginMdx(),
    core.getGatsbyPluginPreloadFonts(),
    core.getGatsbyPluginReactHelmet(),
    core.getGatsbyPluginGoogleTagmanager({
      googleTagId: 'GTM-T4LK3QF',
    }),
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_MIR,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_MIR,
        environment: 'master',
      },
    },
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
