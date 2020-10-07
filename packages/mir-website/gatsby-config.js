'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod) if (k !== 'default' && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.loadDotEnv = void 0;
const core_gatsby_config_1 = require('@newrade/core-gatsby-config');
const dotenv = __importStar(require('dotenv'));
const path_1 = __importDefault(require('path'));
const dot_env_1 = require('./types/dot-env');
const core_utils_1 = require('@newrade/core-utils');
// TODO move to a different file
const env = loadDotEnv();
function loadDotEnv() {
  // add env variables from .env file
  dotenv.config({
    path: path_1.default.resolve(__dirname, '.env'),
  });
  return process.env;
}
exports.loadDotEnv = loadDotEnv;
core_utils_1.log(`SITE_ENV is ${env.SITE_ENV}`, {
  toolName: 'mir-website',
});
core_utils_1.log(`SITE_URL is ${env.SITE_URL}`, {
  toolName: 'mir-website',
});
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = {
  siteMetadata: {
    title: `MIR Website`,
    description: `Gatsby powered MIR website`,
    siteUrl: env.SITE_URL,
    languages: {
      langs: [core_gatsby_config_1.SITE_LANGUAGES.FR, core_gatsby_config_1.SITE_LANGUAGES.EN],
      defaultLangKey: core_gatsby_config_1.SITE_LANGUAGES.FR,
    },
  },
  plugins: [
    core_gatsby_config_1.getGatsbyTsPluginConfig(),
    core_gatsby_config_1.getGatsbyReactSvgConfig(),
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: env.GRAPH_CMS_API_URL_MIR,
        headers: {
          Authorization: `bearer ${env.GRAPH_CMS_AUTH_TOKEN_MIR}`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path_1.default.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    /**
     * gatsby-source-graphcms
     * @see https://github.com/GraphCMS/gatsby-source-graphcms/tree/next/gatsby-source-graphcms
     */
    // {
    //   resolve: 'gatsby-source-graphcms',
    //   options: {
    //     endpoint: env.GRAPH_CMS_API_URL_MIR,
    //     token: env.GRAPH_CMS_AUTH_TOKEN_MIR,
    //   },
    // },
    /**
     * gatsby-plugin-react-helmet
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
     * @see https://github.com/nfl/react-helmet
     */
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    /**
     * gatsby-plugin-i18n
     * @see https://github.com/angeloocana/gatsby-plugin-i18n#readme
     */
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        /**
         * langKey to use when no langKey specified.
         */
        langKeyDefault: 'fr',
        /**
         * langKey added to page context and graphql when no langKey specified. Default: any
         */
        langKeyForNull: 'fr',
        /**
         * true: use a different layout for each langKey (src/layouts/en.js, src/layouts/pt.js, ...)
         * false: use default layout (src/layouts/index.js)
         */
        useLangKeyLayout: false,
        /**
         * true: add langKey on all pages, including default
         * false: omit langKey in url when page lang is the default
         */
        prefixDefault: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T4LK3QF',
      },
    },
    /**
     * gatsby-plugin-sitemap
     *
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/?=sitemap
     */
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        /**
         * Whether to populate the <head> of your site with a link to the sitemap.
         */
        createLinkInHead: true,
      },
    },
    /**
     * gatsby-plugin-robots-txt
     *
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/
     */
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        /**
         * Host of your site
         * @default ${siteMetadata.siteUrl}
         */
        host: `${env.SITE_URL}`,
        /**
         * Path(s) to sitemap.xml
         * @default ${siteMetadata.siteUrl}/sitemap.xml
         */
        sitemap: `${env.SITE_URL}/sitemap.xml`,
        /**
         * Path where to create the robots.txt
         * @default /robots.txt
         */
        output: '/robots.txt',
        /**
         * Resolve a custom env variable
         */
        resolveEnv: () => env.SITE_ENV,
        /**
         * List of Policy rules per environment
         */
        env: {
          [dot_env_1.SITE_ENV.LOCAL]: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          [dot_env_1.SITE_ENV.DEV]: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          [dot_env_1.SITE_ENV.STAGING]: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          [dot_env_1.SITE_ENV.PRODUCTION]: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
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
    /**
     * gatsby-plugin-netlify
     *
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/
     */
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        /**
         * option to add more headers. `Link` headers are transformed by the below criteria
         */
        headers: {
          '/*': ['X-Frame-Option: DENY', 'X-Content-Type-Options: nosniff'],
        },
        /**
         * option to add headers for all pages. `Link` headers are transformed by the below criteria
         */
        allPageHeaders: [],
        /**
         * boolean to turn off the default security headers
         */
        mergeSecurityHeaders: true,
        /**
         * boolean to turn off the default gatsby js headers
         */
        mergeLinkHeaders: true,
        /**
         * boolean to turn off the default gatsby js headers
         */
        mergeCachingHeaders: true,
        /**
         * boolean to turn off the default caching headers
         */
        transformHeaders: (headers, path) => headers,
        /**
         * optional transform for manipulating headers under each path (e.g.sorting), etc.
         */
        generateMatchPathRewrites: true,
      },
    },
    /**
     * gatsby-plugin-preload-fonts
     *
     * note: refresh font by running the preload-fonts script
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts
     */
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {},
    },
  ],
};
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0c2J5LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhdHNieS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUtxQztBQUNyQywrQ0FBaUM7QUFDakMsZ0RBQXdCO0FBQ3hCLDZDQUFnRDtBQUNoRCxvREFBMEM7QUFFMUMsZ0NBQWdDO0FBQ2hDLE1BQU0sR0FBRyxHQUFHLFVBQVUsRUFBRSxDQUFDO0FBQ3pCLFNBQWdCLFVBQVU7SUFDeEIsbUNBQW1DO0lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDWixJQUFJLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO0tBQ3RDLENBQUMsQ0FBQztJQUVILE9BQU8sT0FBTyxDQUFDLEdBQVUsQ0FBQztBQUM1QixDQUFDO0FBUEQsZ0NBT0M7QUFFRCxnQkFBRyxDQUFDLGVBQWUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ2pDLFFBQVEsRUFBRSxhQUFhO0NBQ3hCLENBQUMsQ0FBQztBQUNILGdCQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDakMsUUFBUSxFQUFFLGFBQWE7Q0FDeEIsQ0FBQyxDQUFDO0FBRUg7Ozs7R0FJRztBQUNILE1BQU0sTUFBTSxHQUFxQjtJQUMvQixZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsYUFBYTtRQUNwQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUTtRQUNyQixTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxtQ0FBYyxDQUFDLEVBQUUsRUFBRSxtQ0FBYyxDQUFDLEVBQUUsQ0FBQztZQUM3QyxjQUFjLEVBQUUsbUNBQWMsQ0FBQyxFQUFFO1NBQ2xDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCw0Q0FBdUIsRUFBRTtRQUN6Qiw0Q0FBdUIsRUFBRTtRQUN6QjtZQUNFLE9B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QUFNLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO3FCQUN6QztpQkFDRjthQUNGO1NBQ0Y7UUFDRDs7OztXQUlHO1FBQ0gsSUFBSTtRQUNKLGtDQUFrQztRQUNsQyxlQUFlO1FBQ2YsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsK0JBQStCO1FBQy9CLG9DQUFvQztRQUNwQyxvQkFBb0I7UUFDcEIsZ0NBQWdDO1FBQ2hDLCtDQUErQztRQUMvQywwRkFBMEY7UUFDMUYsOERBQThEO1FBQzlELFNBQVM7UUFDVCxPQUFPO1FBQ1AsS0FBSztRQUNMOzs7O1dBSUc7UUFDSDtZQUNFLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsT0FBTyxFQUFFO2dCQUNQOzttQkFFRztnQkFDSCxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsaUNBQWlDLENBQUM7aUJBQ2xFO2dCQUNEOzttQkFFRztnQkFDSCxjQUFjLEVBQUUsRUFBRTtnQkFDbEI7O21CQUVHO2dCQUNILG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCOzttQkFFRztnQkFDSCxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0Qjs7bUJBRUc7Z0JBQ0gsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekI7O21CQUVHO2dCQUNILGdCQUFnQixFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTztnQkFDNUM7O21CQUVHO2dCQUNILHlCQUF5QixFQUFFLElBQUk7YUFJaEM7U0FDRjtRQUNEOzs7OztXQUtHO1FBQ0g7WUFDRSxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FDRjtDQUNGLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBHYXN0YnlTaXRlQ29uZmlnLFxuICBnZXRHYXRzYnlUc1BsdWdpbkNvbmZpZyxcbiAgU0lURV9MQU5HVUFHRVMsXG4gIGdldEdhdHNieVJlYWN0U3ZnQ29uZmlnLFxufSBmcm9tICdAbmV3cmFkZS9jb3JlLWdhdHNieS1jb25maWcnO1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEVOViwgU0lURV9FTlYgfSBmcm9tICcuL3R5cGVzL2RvdC1lbnYnO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnQG5ld3JhZGUvY29yZS11dGlscyc7XG5cbi8vIFRPRE8gbW92ZSB0byBhIGRpZmZlcmVudCBmaWxlXG5jb25zdCBlbnYgPSBsb2FkRG90RW52KCk7XG5leHBvcnQgZnVuY3Rpb24gbG9hZERvdEVudigpIHtcbiAgLy8gYWRkIGVudiB2YXJpYWJsZXMgZnJvbSAuZW52IGZpbGVcbiAgZG90ZW52LmNvbmZpZyh7XG4gICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy5lbnYnKSxcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2Nlc3MuZW52IGFzIEVOVjtcbn1cblxubG9nKGBTSVRFX0VOViBpcyAke2Vudi5TSVRFX0VOVn1gLCB7XG4gIHRvb2xOYW1lOiAnbWlyLXdlYnNpdGUnLFxufSk7XG5sb2coYFNJVEVfVVJMIGlzICR7ZW52LlNJVEVfVVJMfWAsIHtcbiAgdG9vbE5hbWU6ICdtaXItd2Vic2l0ZScsXG59KTtcblxuLyoqXG4gKiBDb25maWd1cmUgeW91ciBHYXRzYnkgc2l0ZSB3aXRoIHRoaXMgZmlsZS5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vd3d3LmdhdHNieWpzLm9yZy9kb2NzL2dhdHNieS1jb25maWcvXG4gKi9cbmNvbnN0IGNvbmZpZzogR2FzdGJ5U2l0ZUNvbmZpZyA9IHtcbiAgc2l0ZU1ldGFkYXRhOiB7XG4gICAgdGl0bGU6IGBNSVIgV2Vic2l0ZWAsXG4gICAgZGVzY3JpcHRpb246IGBHYXRzYnkgcG93ZXJlZCBNSVIgd2Vic2l0ZWAsXG4gICAgc2l0ZVVybDogZW52LlNJVEVfVVJMLFxuICAgIGxhbmd1YWdlczoge1xuICAgICAgbGFuZ3M6IFtTSVRFX0xBTkdVQUdFUy5GUiwgU0lURV9MQU5HVUFHRVMuRU5dLFxuICAgICAgZGVmYXVsdExhbmdLZXk6IFNJVEVfTEFOR1VBR0VTLkZSLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBnZXRHYXRzYnlUc1BsdWdpbkNvbmZpZygpLFxuICAgIGdldEdhdHNieVJlYWN0U3ZnQ29uZmlnKCksXG4gICAge1xuICAgICAgcmVzb2x2ZTogYGdhdHNieS1zb3VyY2UtZ3JhcGhxbGAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGVOYW1lOiBgR3JhcGhDTVNgLFxuICAgICAgICBmaWVsZE5hbWU6IGBnY21zYCxcbiAgICAgICAgdXJsOiBlbnYuR1JBUEhfQ01TX0FQSV9VUkxfTUlSLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYGJlYXJlciAke2Vudi5HUkFQSF9DTVNfQVVUSF9UT0tFTl9NSVJ9YCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICByZXNvbHZlOiBgZ2F0c2J5LXNvdXJjZS1maWxlc3lzdGVtYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbmFtZTogYGltYWdlc2AsXG4gICAgICAgIHBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsIGBzcmNgLCBgaW1hZ2VzYCksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYGdhdHNieS10cmFuc2Zvcm1lci1zaGFycGAsXG4gICAgYGdhdHNieS1wbHVnaW4tc2hhcnBgLFxuICAgIHtcbiAgICAgIHJlc29sdmU6IGBnYXRzYnktcGx1Z2luLW1hbmlmZXN0YCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbmFtZTogYE1JUmAsXG4gICAgICAgIHNob3J0X25hbWU6IGBNSVJgLFxuICAgICAgICBzdGFydF91cmw6IGAvYCxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogYCNmN2YwZWJgLFxuICAgICAgICB0aGVtZV9jb2xvcjogYCNhMjQ2NmNgLFxuICAgICAgICBkaXNwbGF5OiBgc3RhbmRhbG9uZWAsXG4gICAgICAgIGljb246IGBzcmMvaWxsdXN0cmF0aW9ucy9Mb2dvL0xvZ29GYXZpY29uLnBuZ2AsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLyoqXG4gICAgICogZ2F0c2J5LXNvdXJjZS1ncmFwaGNtc1xuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0dyYXBoQ01TL2dhdHNieS1zb3VyY2UtZ3JhcGhjbXMvdHJlZS9uZXh0L2dhdHNieS1zb3VyY2UtZ3JhcGhjbXNcbiAgICAgKi9cbiAgICAvLyB7XG4gICAgLy8gICByZXNvbHZlOiAnZ2F0c2J5LXNvdXJjZS1ncmFwaGNtcycsXG4gICAgLy8gICBvcHRpb25zOiB7XG4gICAgLy8gICAgIGVuZHBvaW50OiBlbnYuR1JBUEhfQ01TX0FQSV9VUkxfTUlSLFxuICAgIC8vICAgICB0b2tlbjogZW52LkdSQVBIX0NNU19BVVRIX1RPS0VOX01JUixcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgICAvKipcbiAgICAgKiBnYXRzYnktcGx1Z2luLXJlYWN0LWhlbG1ldFxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dhdHNieWpzL2dhdHNieS90cmVlL21hc3Rlci9wYWNrYWdlcy9nYXRzYnktcGx1Z2luLXJlYWN0LWhlbG1ldFxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25mbC9yZWFjdC1oZWxtZXRcbiAgICAgKi9cbiAgICB7XG4gICAgICByZXNvbHZlOiAnZ2F0c2J5LXBsdWdpbi1yZWFjdC1oZWxtZXQnLFxuICAgIH0sXG4gICAgLyoqXG4gICAgICogZ2F0c2J5LXBsdWdpbi1pMThuXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5nZWxvb2NhbmEvZ2F0c2J5LXBsdWdpbi1pMThuI3JlYWRtZVxuICAgICAqL1xuICAgIHtcbiAgICAgIHJlc29sdmU6ICdnYXRzYnktcGx1Z2luLWkxOG4nLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogbGFuZ0tleSB0byB1c2Ugd2hlbiBubyBsYW5nS2V5IHNwZWNpZmllZC5cbiAgICAgICAgICovXG4gICAgICAgIGxhbmdLZXlEZWZhdWx0OiAnZnInLFxuICAgICAgICAvKipcbiAgICAgICAgICogbGFuZ0tleSBhZGRlZCB0byBwYWdlIGNvbnRleHQgYW5kIGdyYXBocWwgd2hlbiBubyBsYW5nS2V5IHNwZWNpZmllZC4gRGVmYXVsdDogYW55XG4gICAgICAgICAqL1xuICAgICAgICBsYW5nS2V5Rm9yTnVsbDogJ2ZyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRydWU6IHVzZSBhIGRpZmZlcmVudCBsYXlvdXQgZm9yIGVhY2ggbGFuZ0tleSAoc3JjL2xheW91dHMvZW4uanMsIHNyYy9sYXlvdXRzL3B0LmpzLCAuLi4pXG4gICAgICAgICAqIGZhbHNlOiB1c2UgZGVmYXVsdCBsYXlvdXQgKHNyYy9sYXlvdXRzL2luZGV4LmpzKVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlTGFuZ0tleUxheW91dDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0cnVlOiBhZGQgbGFuZ0tleSBvbiBhbGwgcGFnZXMsIGluY2x1ZGluZyBkZWZhdWx0XG4gICAgICAgICAqIGZhbHNlOiBvbWl0IGxhbmdLZXkgaW4gdXJsIHdoZW4gcGFnZSBsYW5nIGlzIHRoZSBkZWZhdWx0XG4gICAgICAgICAqL1xuICAgICAgICBwcmVmaXhEZWZhdWx0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICByZXNvbHZlOiAnZ2F0c2J5LXBsdWdpbi1nb29nbGUtdGFnbWFuYWdlcicsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGlkOiAnR1RNLVQ0TEszUUYnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIGdhdHNieS1wbHVnaW4tc2l0ZW1hcFxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL3d3dy5nYXRzYnlqcy5jb20vcGx1Z2lucy9nYXRzYnktcGx1Z2luLXNpdGVtYXAvPz1zaXRlbWFwXG4gICAgICovXG4gICAge1xuICAgICAgcmVzb2x2ZTogJ2dhdHNieS1wbHVnaW4tc2l0ZW1hcCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRvIHBvcHVsYXRlIHRoZSA8aGVhZD4gb2YgeW91ciBzaXRlIHdpdGggYSBsaW5rIHRvIHRoZSBzaXRlbWFwLlxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlTGlua0luSGVhZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBnYXRzYnktcGx1Z2luLXJvYm90cy10eHRcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly93d3cuZ2F0c2J5anMuY29tL3BsdWdpbnMvZ2F0c2J5LXBsdWdpbi1yb2JvdHMtdHh0L1xuICAgICAqL1xuICAgIHtcbiAgICAgIHJlc29sdmU6ICdnYXRzYnktcGx1Z2luLXJvYm90cy10eHQnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogSG9zdCBvZiB5b3VyIHNpdGVcbiAgICAgICAgICogQGRlZmF1bHQgJHtzaXRlTWV0YWRhdGEuc2l0ZVVybH1cbiAgICAgICAgICovXG4gICAgICAgIGhvc3Q6IGAke2Vudi5TSVRFX1VSTH1gLFxuICAgICAgICAvKipcbiAgICAgICAgICogUGF0aChzKSB0byBzaXRlbWFwLnhtbFxuICAgICAgICAgKiBAZGVmYXVsdCAke3NpdGVNZXRhZGF0YS5zaXRlVXJsfS9zaXRlbWFwLnhtbFxuICAgICAgICAgKi9cbiAgICAgICAgc2l0ZW1hcDogYCR7ZW52LlNJVEVfVVJMfS9zaXRlbWFwLnhtbGAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXRoIHdoZXJlIHRvIGNyZWF0ZSB0aGUgcm9ib3RzLnR4dFxuICAgICAgICAgKiBAZGVmYXVsdCAvcm9ib3RzLnR4dFxuICAgICAgICAgKi9cbiAgICAgICAgb3V0cHV0OiAnL3JvYm90cy50eHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzb2x2ZSBhIGN1c3RvbSBlbnYgdmFyaWFibGVcbiAgICAgICAgICovXG4gICAgICAgIHJlc29sdmVFbnY6ICgpID0+IGVudi5TSVRFX0VOVixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3Qgb2YgUG9saWN5IHJ1bGVzIHBlciBlbnZpcm9ubWVudFxuICAgICAgICAgKi9cbiAgICAgICAgZW52OiB7XG4gICAgICAgICAgW1NJVEVfRU5WLkxPQ0FMXToge1xuICAgICAgICAgICAgcG9saWN5OiBbeyB1c2VyQWdlbnQ6ICcqJywgZGlzYWxsb3c6IFsnLyddIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1NJVEVfRU5WLkRFVl06IHtcbiAgICAgICAgICAgIHBvbGljeTogW3sgdXNlckFnZW50OiAnKicsIGRpc2FsbG93OiBbJy8nXSB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtTSVRFX0VOVi5TVEFHSU5HXToge1xuICAgICAgICAgICAgcG9saWN5OiBbeyB1c2VyQWdlbnQ6ICcqJywgZGlzYWxsb3c6IFsnLyddIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1NJVEVfRU5WLlBST0RVQ1RJT05dOiB7XG4gICAgICAgICAgICBwb2xpY3k6IFt7IHVzZXJBZ2VudDogJyonLCBhbGxvdzogJy8nIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLyoqXG4gICAgICogZ2F0c2J5LXBsdWdpbi1jc3BcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly93d3cuZ2F0c2J5anMuY29tL3BsdWdpbnMvZ2F0c2J5LXBsdWdpbi1jc3AvXG4gICAgICovXG4gICAgLy8ge1xuICAgIC8vICAgcmVzb2x2ZTogYGdhdHNieS1wbHVnaW4tY3NwYCxcbiAgICAvLyAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgZGlzYWJsZU9uRGV2OiB0cnVlLFxuICAgIC8vICAgICByZXBvcnRPbmx5OiBmYWxzZSxcbiAgICAvLyAgICAgbWVyZ2VTY3JpcHRIYXNoZXM6IHRydWUsXG4gICAgLy8gICAgIG1lcmdlU3R5bGVIYXNoZXM6IGZhbHNlLFxuICAgIC8vICAgICBtZXJnZURlZmF1bHREaXJlY3RpdmVzOiB0cnVlLFxuICAgIC8vICAgICBkaXJlY3RpdmVzOiB7XG4gICAgLy8gICAgICAgJ3NjcmlwdC1zcmMnOiBcIidzZWxmJ1wiLFxuICAgIC8vICAgICAgICdzdHlsZS1zcmMnOiBcIidzZWxmJyAndW5zYWZlLWlubGluZSdcIixcbiAgICAvLyAgICAgICAnaW1nLXNyYyc6IFwiJ3NlbGYnIGRhdGE6IGh0dHBzOi8vbWVkaWEuZ3JhcGhjbXMuY29tIGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbVwiLFxuICAgIC8vICAgICAgICdmb250LXNyYyc6IFwiJ3NlbGYnIGRhdGE6IGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgICAvKipcbiAgICAgKiBnYXRzYnktcGx1Z2luLW5ldGxpZnlcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly93d3cuZ2F0c2J5anMuY29tL3BsdWdpbnMvZ2F0c2J5LXBsdWdpbi1uZXRsaWZ5L1xuICAgICAqL1xuICAgIHtcbiAgICAgIHJlc29sdmU6IGBnYXRzYnktcGx1Z2luLW5ldGxpZnlgLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogb3B0aW9uIHRvIGFkZCBtb3JlIGhlYWRlcnMuIGBMaW5rYCBoZWFkZXJzIGFyZSB0cmFuc2Zvcm1lZCBieSB0aGUgYmVsb3cgY3JpdGVyaWFcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnLyonOiBbJ1gtRnJhbWUtT3B0aW9uOiBERU5ZJywgJ1gtQ29udGVudC1UeXBlLU9wdGlvbnM6IG5vc25pZmYnXSxcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9wdGlvbiB0byBhZGQgaGVhZGVycyBmb3IgYWxsIHBhZ2VzLiBgTGlua2AgaGVhZGVycyBhcmUgdHJhbnNmb3JtZWQgYnkgdGhlIGJlbG93IGNyaXRlcmlhXG4gICAgICAgICAqL1xuICAgICAgICBhbGxQYWdlSGVhZGVyczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBib29sZWFuIHRvIHR1cm4gb2ZmIHRoZSBkZWZhdWx0IHNlY3VyaXR5IGhlYWRlcnNcbiAgICAgICAgICovXG4gICAgICAgIG1lcmdlU2VjdXJpdHlIZWFkZXJzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogYm9vbGVhbiB0byB0dXJuIG9mZiB0aGUgZGVmYXVsdCBnYXRzYnkganMgaGVhZGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgbWVyZ2VMaW5rSGVhZGVyczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJvb2xlYW4gdG8gdHVybiBvZmYgdGhlIGRlZmF1bHQgZ2F0c2J5IGpzIGhlYWRlcnNcbiAgICAgICAgICovXG4gICAgICAgIG1lcmdlQ2FjaGluZ0hlYWRlcnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBib29sZWFuIHRvIHR1cm4gb2ZmIHRoZSBkZWZhdWx0IGNhY2hpbmcgaGVhZGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNmb3JtSGVhZGVyczogKGhlYWRlcnMsIHBhdGgpID0+IGhlYWRlcnMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvcHRpb25hbCB0cmFuc2Zvcm0gZm9yIG1hbmlwdWxhdGluZyBoZWFkZXJzIHVuZGVyIGVhY2ggcGF0aCAoZS5nLnNvcnRpbmcpLCBldGMuXG4gICAgICAgICAqL1xuICAgICAgICBnZW5lcmF0ZU1hdGNoUGF0aFJld3JpdGVzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogYm9vbGVhbiB0byB0dXJuIG9mZiBhdXRvbWF0aWMgY3JlYXRpb24gb2YgcmVkaXJlY3QgcnVsZXMgZm9yIGNsaWVudCBvbmx5IHBhdGhzXG4gICAgICAgICAqL1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIGdhdHNieS1wbHVnaW4tcHJlbG9hZC1mb250c1xuICAgICAqXG4gICAgICogbm90ZTogcmVmcmVzaCBmb250IGJ5IHJ1bm5pbmcgdGhlIHByZWxvYWQtZm9udHMgc2NyaXB0XG4gICAgICogQHNlZSBodHRwczovL3d3dy5nYXRzYnlqcy5jb20vcGx1Z2lucy9nYXRzYnktcGx1Z2luLXByZWxvYWQtZm9udHNcbiAgICAgKi9cbiAgICB7XG4gICAgICByZXNvbHZlOiBgZ2F0c2J5LXBsdWdpbi1wcmVsb2FkLWZvbnRzYCxcbiAgICAgIG9wdGlvbnM6IHt9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=
