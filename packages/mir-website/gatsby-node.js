"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const core_utils_1 = require("@newrade/core-utils");
const path_1 = __importDefault(require("path"));
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
const env = core_utils_1.loadDotEnv(path_1.default.resolve(__dirname, '.env'));
exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;
    /**
     * Page rdirection
     */
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
    /**
     * Page creations
     */
    try {
        const result = await graphql(`
        query GatsbyNodePages {
          allContentfulPage {
            edges {
              node {
                id
                route
              }
            }
          }
        }
      `);
        // Handle errors
        if (result.errors) {
            throw new Error('Error while retrieving pages');
        }
        // Create pages for each page
        const pageTemplate = path_1.default.resolve(`src/templates/page.template.tsx`);
        result.data.allContentfulPage.edges.forEach((edge, index) => {
            createPage({
                path: edge.node.route,
                component: pageTemplate,
                context: {
                    pageId: edge.node.id,
                },
            });
        });
    }
    catch (error) {
        core_utils_1.log(`Error occured when generating pages: ${error}`, {
            toolName: 'mir-website',
            level: core_utils_1.LOG_LEVEL.ERROR,
        });
        if (error) {
            throw new Error('Error while retrieving pages');
        }
    }
};
