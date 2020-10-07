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
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = {
    siteMetadata: {
        title: `core-gatsby-website`,
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path_1.default.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        /**
         * gatsby-source-graphcms
         * @see https://github.com/GraphCMS/gatsby-source-graphcms/tree/next/gatsby-source-graphcms
         */
        // {
        //   resolve: 'gatsby-source-graphcms',
        //   options: {
        //     downloadLocalImages: true,
        //     buildMarkdownNodes: true,
        //     endpoint: env.GRAPH_CMS_API_URL_CORE,
        //     token: env.GRAPH_CMS_AUTH_TOKEN_CORE,
        //   },
        // },
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `GraphCMS`,
                fieldName: `gcms`,
                url: env.GRAPH_CMS_API_URL_CORE,
                headers: {
                    Authorization: `bearer ${env.GRAPH_CMS_AUTH_TOKEN_CORE}`,
                },
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                remarkPlugins: [],
                rehypePlugins: [],
            },
        },
        /**
         * gatsby-plugin-react-helmet
         * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet
         * @see https://github.com/nfl/react-helmet
         */
        {
            resolve: 'gatsby-plugin-react-helmet',
        },
    ],
};
exports.default = config;
