"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const core_gatsby_config_1 = require("@newrade/core-gatsby-config");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
exports.config = {
    siteMetadata: {
        title: `My Gatsby Site`,
        description: `An example site.`,
    },
    plugins: [
        core_gatsby_config_1.getGatsbyTsPluginConfig(),
        core_gatsby_config_1.getGatsbyReactSvgConfig(),
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `GraphCMS`,
                fieldName: `gcms`,
                url: process.env.GRAPH_CMS_API_URL_NEWRADE,
                headers: {
                    Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_NEWRADE}`,
                },
            },
        },
    ],
};
exports.default = exports.config;
