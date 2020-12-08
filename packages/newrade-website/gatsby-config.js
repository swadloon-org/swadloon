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
exports.config = void 0;
const core = __importStar(require("@newrade/core-gatsby-config"));
const core_gatsby_config_1 = require("@newrade/core-gatsby-config");
const core_utils_1 = require("@newrade/core-utils");
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("./package.json"));
const dot_env_1 = require("./types/dot-env");
const env = core_utils_1.loadDotEnv({
    schema: dot_env_1.Env,
    dotEnvPath: path_1.default.resolve(__dirname, '.env'),
    packageName: package_json_1.default.name,
});
core_utils_1.logEnvVariables({ packageName: package_json_1.default.name, env });
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
exports.config = {
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
        /**
         * Project Specific Plugins
         */
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: core_gatsby_config_1.SOURCE_INSTANCE_NAME.MDX_PAGES,
                path: `${__dirname}/src/pages/`,
                ignore: [`**/*.ts?x`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: core_gatsby_config_1.SOURCE_INSTANCE_NAME.PACKAGE_DOCS,
                path: `${__dirname}/src/docs/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: core_gatsby_config_1.SOURCE_INSTANCE_NAME.DOCS,
                path: `${__dirname}/../../docs/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: env.CONTENTFUL_SPACEID_NEWRADE,
                accessToken: env.CONTENTFUL_DELIVERY_TOKEN_NEWRADE,
                environment: 'master',
            },
        },
        /**
         * Core Plugins
         */
        core.getGatsbyTsPluginConfig(),
        core.getGatsbyReactSvgConfig(),
        core.getGastbyPluginPageCreatorConfig(),
        core.getGastbyPluginTreatConfig(),
        core.getGatsbyTransformerSharp(),
        core.getGatsbyPluginSharp(),
        core.getGastbyPluginTreatConfig(),
        core.getGatsbyPluginMdx(),
        core.getGatsbyImageFolder(),
        core.getGatsbyPluginReactHelmet(),
        core.getGatsbyPluginSitemap(),
        core.getGatsbyPluginRobotsTxt({ env }),
        core.getGatsbyNetlifyPlugin(),
        // core.getGatsbyPluginPreloadFonts(),
        core.getGatsbyImageFolder({
            pathImgDir: path_1.default.join(__dirname, `src`, `images`),
        }),
        core.getGastbyCorePluginConfig(),
    ],
};
exports.default = exports.config;
