"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDotEnv = void 0;
const core_gatsby_config_1 = require("@newrade/core-gatsby-config");
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
const dot_env_1 = require("./types/dot-env");
const core_utils_1 = require("@newrade/core-utils");
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
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${env.CONTENTFUL_ACCESS_SPACEID_MIR}`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: env.CONTENTFUL_ACCESS_TOKEN_MIR,
            },
        },
        // {
        //   resolve: `gatsby-source-graphql`,
        //   options: {
        //     typeName: `GraphCMS`,
        //     fieldName: `gcms`,
        //     url: env.GRAPH_CMS_API_URL_MIR,
        //     headers: {
        //       Authorization: `bearer ${env.GRAPH_CMS_AUTH_TOKEN_MIR}`,
        //     },
        //   },
        // },
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
