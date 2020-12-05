import * as core from '@newrade/core-gatsby-config';
import { loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import Gatsby from 'gatsby';
import path from 'path';
import packageJson from './package.json';
import { Env, ENV } from './types/dot-env';

const env = loadDotEnv<ENV>({
  schema: Env,
  dotEnvPath: path.resolve(__dirname, '..', '.env'),
  packageName: packageJson.name,
});
logEnvVariables<ENV>({ packageName: packageJson.name, env });

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
export const config: Gatsby.GatsbyConfig = {
  siteMetadata: {
    title: `Newrade Website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.APP_URL,
    siteEnv: env.APP_ENV,
    languages: {
      langs: [core.SITE_LANGUAGES.FR, core.SITE_LANGUAGES.EN],
      defaultLangKey: core.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
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
    core.getGastbyPluginTreatConfig(),
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
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACEID_NEWRADE,
        accessToken: env.CONTENTFUL_DELIVERY_TOKEN_NEWRADE,
        environment: 'master',
      },
    },
  ],
};

export default config;
