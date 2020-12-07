"use strict";
/**
 * Gatsby Node APIs
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-node/
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const core_utils_1 = require("@newrade/core-utils");
const case_1 = require("case");
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("./package.json"));
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    try {
        /**
         * Query for site metadata
         */
        const allSiteData = await graphql(`
      query GatsbyNodeAllSite {
        site {
          siteMetadata {
            ...GatsbyNodeSiteMetadata
          }
        }
      }

      fragment GatsbyNodeSiteMetadata on SiteSiteMetadata {
        title
        description
        siteEnv
        siteUrl
        languages {
          langs
          defaultLangKey
        }
      }
    `);
        if (!allSiteData.data?.site?.siteMetadata) {
            throw new core_utils_1.AppError({
                name: core_utils_1.ERROR_TYPE.GATSBY_ERROR,
                message: `Could not retrieve siteMetadata`,
            });
        }
        const siteMetadata = allSiteData.data.site.siteMetadata;
        /**
         * *** NOT WORKING CURRENTLY sources pages from gatsby-source-filesystem cause a crash during build ***
         {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `srcPages`,
            path: `${__dirname}/src/pages/`,
          },
        },
         * Query for pages found in /src/pages
         */
        const srcPagesFilesData = await graphql(`
      query GatsbyNodeSrcPageFiles {
        allFile(filter: { ext: { in: [".tsx"] }, sourceInstanceName: { eq: "srcPages" } }) {
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
          }
        }
      }
    `);
        core_utils_1.log(`Got ${srcPagesFilesData?.data?.allFile?.nodes?.length} files for src pages`, {
            toolName: package_json_1.default.name,
        });
        /**
         * Query for all `.md?x` files
         */
        const markdownFilesData = await graphql(`
      query GatsbyNodeMarkdownFiles {
        allFile(filter: { ext: { in: [".md", ".mdx"] } }) {
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
        core_utils_1.log(`Got ${markdownFilesData?.data?.allFile?.nodes?.length} files for markdown pages`, {
            toolName: package_json_1.default.name,
        });
        /**
         * Organise files to create pages and paths
         */
        const srcPageTemplate = path_1.default.resolve(`src/templates/src-page.template.tsx`);
        const markdownTemplate = path_1.default.resolve(`src/templates/markdown.template.tsx`);
        /**
         * *** NOT WORKING CURRENTLY ***
         * Create src pages
         */
        srcPagesFilesData?.data?.allFile.nodes.forEach((node, index) => {
            const nodeName = node.name.replace('page', '');
            const path = nodeName === 'index' ? `/` : `${case_1.kebab(nodeName)}/`;
            core_utils_1.log(`Creating src page: ${path}`, {
                toolName: package_json_1.default.name,
            });
            createPage({
                path,
                context: {
                    siteMetadata,
                    fileId: node.id,
                },
                component: node.absolutePath,
            });
        });
        /**
         * Create Markdown pages
         */
        markdownFilesData?.data?.allFile.nodes.forEach((node, index) => {
            const path = `${node.sourceInstanceName ? `${case_1.kebab(node.sourceInstanceName)}/` : ''}${node.childMdx?.slug}`;
            core_utils_1.log(`Creating markdown page: ${path}`, {
                toolName: package_json_1.default.name,
            });
            createPage({
                path,
                context: {
                    siteMetadata,
                    fileId: node.id,
                },
                component: markdownTemplate,
            });
        });
    }
    catch (error) {
        core_utils_1.log(`Error occured when generating pages: ${error}`, {
            toolName: package_json_1.default.name,
            level: core_utils_1.LOG_LEVEL.ERROR,
        });
        if (error) {
            throw new core_utils_1.AppError({
                name: core_utils_1.ERROR_TYPE.GATSBY_ERROR,
                message: error,
            });
        }
    }
};
