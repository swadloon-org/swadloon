"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPreBootstrap = exports.createPages = exports.onCreateWebpackConfig = exports.onCreateBabelConfig = void 0;
const core_gatsby_config_1 = require("@newrade/core-gatsby-config");
const core_utils_1 = require("@newrade/core-utils");
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
require('dotenv').config();
exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: 'babel-plugin-treat',
        options: {},
    });
};
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions, }) => {
    const isProduction = stage !== `develop`;
    const isSSR = stage.includes(`html`);
    actions.setWebpackConfig(core_gatsby_config_1.createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins }));
};
exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;
    createRedirect({ fromPath: '/employeur-en-personnel-specialise/', toPath: '/employeurs/', isPermanent: true });
    createRedirect({ fromPath: '/division-secteur-industriel/', toPath: '/employeurs/', isPermanent: true });
    createRedirect({ fromPath: '/division-entreprises-de-services/', toPath: '/employeurs/', isPermanent: true });
    createRedirect({ fromPath: '/division-construction/', toPath: '/employeurs/', isPermanent: true });
    createRedirect({
        fromPath: '/candidats-recrutement-personnel-specialise/',
        toPath: '/candidats/',
        isPermanent: true,
    });
    createRedirect({
        fromPath: '/coordonnees/',
        toPath: '/nous-joindre/',
        isPermanent: true,
    });
};
// export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
//   node,
//   actions,
//   store,
//   cache,
//   reporter,
//   createNodeId,
// }) => {
//   if (node.internal.type === 'Image') {
//     const { createNode } = actions;
//     /* Download the image and create the File node. Using gatsby-plugin-sharp and gatsby-transformer-sharp the node will become an ImageSharp. */
//     const fileNode = await createRemoteFileNode({
//       url: (node as any).url, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       store, // Gatsby's redux store
//       cache, // get Gatsby's cache
//       reporter,
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//     });
//     if (fileNode) {
//       // link the File node to Image node at field image
//       (node as any).image___NODE = fileNode.id;
//     }
//   }
// };
exports.onPreBootstrap = (args, options, callback) => {
    core_utils_1.log(`GATSBY_ENABLE_INCREMENTAL_BUILD is set to "${process.env.GATSBY_ENABLE_INCREMENTAL_BUILD}"`, {
        toolName: 'mir-website',
    });
    if (process.env.GATSBY_ENABLE_INCREMENTAL_BUILD !== 'true') {
        callback(null);
        return;
    }
    core_utils_1.log(`rebuilding core-* packages for gatsby cloud's incremental build`, {
        toolName: 'mir-website',
    });
    const cwd = child_process_1.spawn(`yarn postinstall`, {
        cwd: '../..',
        shell: true,
        env: process.env,
    });
    cwd.stdout.on('data', (data) => {
        core_utils_1.log(`${data}`, {
            toolName: 'mir-website',
        });
    });
    cwd.stdout.on('error', (data) => {
        core_utils_1.log(`rebuilding core-* packages: ${chalk_1.default.green('error')}`, {
            toolName: 'mir-website',
            level: core_utils_1.LOG_LEVEL.ERROR,
        });
        core_utils_1.log(data?.message, {
            toolName: 'mir-website',
            level: core_utils_1.LOG_LEVEL.ERROR,
        });
        callback(data);
    });
    cwd.on('close', (code) => {
        core_utils_1.log(`rebuilding core-* packages: ${chalk_1.default.green('done')}`, {
            toolName: 'mir-website',
        });
        callback(null);
    });
};
