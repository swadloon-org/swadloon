"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateWebpackConfig = exports.onCreateBabelConfig = void 0;
const webpack_config_1 = require("./webpack.config");
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: 'babel-plugin-treat',
        options: {},
    });
};
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions, }) => {
    const isProduction = stage !== `develop`;
    const isSSR = stage.includes(`html`);
    actions.setWebpackConfig(webpack_config_1.createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins }));
};
