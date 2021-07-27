import * as common from '@newrade/core-common';
import * as core from '@newrade/core-gatsby-config';
import { getAppUrl, loadDotEnv, logEnvVariables } from '@newrade/core-utils';
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
  flags: core.gatsbySiteFlags,
  siteMetadata: {
    title: `Ze Design System Website`,
    description: `Ze Design System main website`,
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
        name: `Ze Design Website`,
        short_name: `Ze DS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6061EC`,
        display: `standalone`,
        icon: `../ze-design-system/lib/assets/logo-favicon.svg`,
        include_favicon: false, // see page template
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
        './src/**/*.{ts,tsx}',
      ],
    }),
    core.getGatsbyPluginCatchLinks(),
    core.getGatsbyReactSvgrSvgoConfig(),
    ...core.getGatsbyImagePlugins(),
    core.getGastbyPluginTreatConfig(),
    core.getGastbyPluginVanilla(),
    core.getGatsbyPluginPostCSS(),
    ...core.getGatsbyPluginMdx(),
    ...core.getGatsbyImageFolder({
      pathImgDir: path.join(__dirname, `../ze-design-system/lib/assets`),
    }),
    core.getGatsbyPluginReactHelmet(),
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    ...core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
    }),
    core.getGatsbyPluginPreloadFonts(),
  ],
};

export default config;
