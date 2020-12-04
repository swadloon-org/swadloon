"use strict";
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const core_utils_1 = require("@newrade/core-utils");
const path_1 = __importDefault(require("path"));
const env = core_utils_1.loadDotEnv(path_1.default.resolve(__dirname, '.env'));
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    /**
     * Page creations
     */
    try {
        /**
         * Automatically create pages
         */
        const allFiles = await graphql(`
        {
          allSite {
            nodes {
              siteMetadata {
                languages {
                  langs
                  defaultLangKey
                }
                description
                siteEnv
                siteUrl
                title
              }
            }
          }
          allFile {
            nodes {
              id
              name
              absolutePath
              ext
              dir
              size
              sourceInstanceName
            }
          }
        }
      `);
        // const markdownTemplate = path.resolve(`src/templates/page.template.tsx`);
        // const markdownTemplate = path.resolve(`src/templates/page.template.tsx`);
        allFiles.data?.allFile.nodes.forEach((node, index) => {
            core_utils_1.log(`Creating page: ${node.name}`, {
                toolName: 'mir-website',
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
