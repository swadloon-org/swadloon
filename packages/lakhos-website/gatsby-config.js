"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const core_gatsby_config_1 = require("@newrade/core-gatsby-config");
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();
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
                url: process.env.GRAPH_CMS_API_URL_LAKHOS,
                headers: {
                    Authorization: `bearer ${process.env.GRAPH_CMS_AUTH_TOKEN_LAKHOS}`,
                },
            },
        },
    ],
};
exports.default = exports.config;
