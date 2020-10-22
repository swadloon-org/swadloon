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
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const core = __importStar(require("@newrade/core-gatsby-config"));
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
        core.getGatsbyTsPluginConfig(),
        core.getGatsbyReactSvgConfig(),
        core.getGastbyPluginTreatConfig(),
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
