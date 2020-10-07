"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateWebpackConfig = exports.onCreateBabelConfig = exports.onCreateNode = void 0;
const core_gatsby_config_1 = require("@newrade/core-gatsby-config");
const crypto_1 = __importDefault(require("crypto"));
const path_1 = __importDefault(require("path"));
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
require('dotenv').config();
exports.createPages = async ({ actions, graphql }) => {
    // const { data } = await graphql(`
    //   {
    //     gcms
    //   }
    // `);
    // console.log(data);
    // data.contents.nodes.forEach((node) => {
    //   createPage({
    //     component: path.resolve(`src/templates/blog-page.tsx`),
    //     context: {
    //       id: node.id,
    //       content: node.contentRich,
    //     } as BlogPostContext,
    //     path: `/blog-post/_${node.title}`,
    //   });
    // });
};
exports.onCreateNode = async ({ node, actions }) => {
    const { createNode, createNodeField } = actions;
    // console.log(node.id);
    // Releases Nodes
    if (node.remoteTypeName === `String`) {
        // Add text/markdown node children to Release node
        const textNode = {
            id: `${node.id}-MarkdownBody`,
            parent: node.id,
            dir: path_1.default.resolve('./'),
            internal: {
                type: `${node.internal.type}MarkdownBody`,
                mediaType: 'text/markdown',
                content: node.body,
                contentDigest: crypto_1.default
                    .createHash(`md5`)
                    .update(node.body)
                    .digest(`hex`),
            },
        };
        createNode(textNode);
        // Create markdownBody___NODE field
        createNodeField({
            node,
            name: 'markdownBody___NODE',
            value: textNode.id,
        });
    }
};
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
