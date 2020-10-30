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
     * Page redirection
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
    const result = await graphql(`
      {
        allContentfulPage {
          edges {
            node {
              id
              Route
            }
          }
        }
      }
    `);
    // Handle errors
    if (result.errors) {
        console.log('Oh booi this is not good');
        return;
    }
    // Create pages for each page
    const pageTemplate = path_1.default.resolve(`src/templates/index-page.template.tsx`);
    result.data.allContentfulPage.edges.forEach((page, index) => {
        createPage({
            path: page.node.Route,
            component: pageTemplate,
            context: {
                id: page.node.id,
            },
        });
    });
};
