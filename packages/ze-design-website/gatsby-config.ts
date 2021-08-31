import * as common from '@newrade/core-common';
import * as core from '@newrade/core-gatsb-config';
import * as conf from '@newrade/core-gatsb-config/config';
import { getAppUrl, loadDotEnv, logEnvVariables } from '@newrade/core-utils';
import path from 'path';
import packageJson from './package.json';
import { Env, ENV } from './types/dot-env';

delete process.env.TS_NODE_PROJECT; // avoid using external tsconfig for ts-loader or other tools

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
const config: conf.GastbySiteConfig = {
  flags: conf.gatsbySiteFlags,
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
        icon: `../ze-design-system/src/assets/logos/logo-favicon.svg`,
        include_favicon: false, // see page template
      },
    },
    /**
     * Core Plugins
     */
    /** template */
    core.getGatsbyPluginReactHelmet(),
    /** js/ts/react */
    core.getGatsbyPluginLoadableComponents(),
    ...core.getGatsbyPluginTypeScriptConfig(),
    ...core.getGastbyCorePluginConfig({
      packageName: packageJson.name,
    }),
    /** svg */
    core.getGatsbyReactSvgrSvgoConfig(),
    /** gatsby plugin image */
    ...core.getGatsbyImagePlugins(),
    /** css */
    core.getGastbyPluginTreatConfig(),
    core.getGastbyPluginVanilla(),
    core.getGatsbyPluginPostCSS(),
    /** mdx */
    core.getGatsbyPluginCatchLinks(),
    ...core.getGatsbyPluginMdx(),
    /** images and assets */
    ...core.getGatsbyImageFolder({
      pathImgDir: [
        path.join(__dirname, `../ze-design-system/src/assets/fonts`),
        path.join(__dirname, `../ze-design-system/src/assets/images`),
        path.join(__dirname, `../ze-design-system/src/assets/logos`),
        path.join(__dirname, `./src/images`),
      ],
    }),
    /** seo */
    core.getGatsbyPluginSitemap(),
    core.getGatsbyPluginRobotsTxt({ env }),
    /** cdn / deploy */
    /** optional font loading optimization */
    core.getGatsbyPluginPreloadFonts(),
  ],
};

export default config;
