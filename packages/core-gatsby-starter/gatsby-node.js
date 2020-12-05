"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
const core_utils_1 = require("@newrade/core-utils");
const package_json_1 = __importDefault(require("./package.json"));
const case_1 = require("case");
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("./package.json"));
const env = core_utils_1.loadDotEnv(path_1.default.resolve(__dirname, '.env'));
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    try {
        /**
         * Retrieve site information and all files infos in order to create pages.
         */
        const { data } = await graphql(`
      query GatsbyNode {
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
          allFile {
            nodes {
              id
              name
              base
              ext
              dir
              absolutePath
              publicURL
              size
              sourceInstanceName
              childMdx {
                slug
                excerpt
                frontmatter {
                  name
                  tags
                  title
                }
        }
        allFile {
          nodes {
            id
            name
            base
            ext
            dir
            absolutePath
            publicURL
            size
            sourceInstanceName
            childMdx {
              slug
              excerpt
              frontmatter {
                name
                tags
                title
              }
            }
          }
        }
      }
    `);
        const defaultPageTemplate = path_1.default.resolve(`src/templates/page.template.tsx`);
        // const markdownTemplate = path.resolve(`src/templates/page.template.tsx`);
        // const markdownTemplate = path.resolve(`src/templates/page.template.tsx`);
        allFiles.data?.allFile.nodes.forEach((node, index) => {
            core_utils_1.log(`Creating page: ${node.name}`, {
                toolName: package_json_1.default.name,
        /**
         * Organise files to create pages and paths
         */
        const mdxPages = data?.allFile.nodes.filter((node, index) => /mdx?/.test(node.ext));
        const docsPages = mdxPages?.filter((node) => node.sourceInstanceName === 'docs');
        const packageDocsPages = mdxPages?.filter((node) => node.sourceInstanceName === 'packagesDocs');
        docsPages?.forEach((node, index) => {
            const path = `${node.sourceInstanceName ? `${case_1.kebab(node.sourceInstanceName)}/` : ''}${node.childMdx?.slug}`;
            core_utils_1.log(`Creating page: ${path}`, {
                toolName: package_json_1.default.name,
            });
            createPage({
                path,
                context: data?.allSite,
                component: defaultPageTemplate,
            });
        });
    }
    catch (error) {
        core_utils_1.log(`Error occured when generating pages: ${error}`, {
            toolName: package_json_1.default.name,
            level: core_utils_1.LOG_LEVEL.ERROR,
        });
        if (error) {
            throw new Error('Error while retrieving pages');
        }
    }
};
