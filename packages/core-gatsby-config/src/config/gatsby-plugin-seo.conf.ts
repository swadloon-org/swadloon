import { DEPLOY_ENV } from '@newrade/core-common';
import { CommonEnvType } from '@newrade/core-utils';
import Gatsby from 'gatsby';

/**
 * gatsby-plugin-google-tagmanager
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/
 */
export function getGatsbyPluginGoogleTagmanager({ googleTagId }: { googleTagId: string }): Gatsby.PluginRef {
  return {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: googleTagId,
    },
  };
}

/**
 * gatsby-plugin-sitemap
 *
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/?=sitemap
 */
export function getGatsbyPluginSitemap(): Gatsby.PluginRef {
  return {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      /**
       * Whether to populate the <head> of your site with a link to the sitemap.
       */
      createLinkInHead: true,
    },
  };
}

/**
 * gatsby-plugin-robots-txt
 *
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/
 */
export function getGatsbyPluginRobotsTxt({ env }: { env: CommonEnvType }): Gatsby.PluginRef {
  return {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      /**
       * Host of your site
       * @default ${siteMetadata.siteUrl}
       */
      host: `${env.APP_URL}`,
      /**
       * Path(s) to sitemap.xml
       * @default ${siteMetadata.siteUrl}/sitemap.xml
       */
      sitemap: `${env.APP_URL}/sitemap.xml`,
      /**
       * Path where to create the robots.txt
       * @default /robots.txt
       */
      output: '/robots.txt',
      /**
       * Resolve a custom env variable
       */
      resolveEnv: () => env.APP_ENV,
      /**
       * List of Policy rules per environment
       */
      env: {
        [DEPLOY_ENV.LOCAL]: {
          policy: [{ userAgent: '*', disallow: ['/'] }],
        },
        [DEPLOY_ENV.DEV]: {
          policy: [{ userAgent: '*', disallow: ['/'] }],
        },
        [DEPLOY_ENV.STAGING]: {
          policy: [{ userAgent: '*', disallow: ['/'] }],
        },
        [DEPLOY_ENV.PRODUCTION]: {
          policy: [{ userAgent: '*', allow: '/' }],
        },
      },
    },
  };
}
