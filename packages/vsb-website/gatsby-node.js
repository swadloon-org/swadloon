"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const core_common_1 = require("@newrade/core-common");
const core_utils_1 = require("@newrade/core-utils");
const path_1 = __importDefault(require("path"));
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;
    /**
     * Page rdirection
     */
    // createRedirect({ fromPath: '/employeur-en-personnel-specialise/', toPath: '/employeurs/', isPermanent: true });
    // createRedirect({ fromPath: '/division-secteur-industriel/', toPath: '/employeurs/', isPermanent: true });
    // createRedirect({ fromPath: '/division-entreprises-de-services/', toPath: '/employeurs/', isPermanent: true });
    // createRedirect({ fromPath: '/division-construction/', toPath: '/employeurs/', isPermanent: true });
    // createRedirect({
    //   fromPath: '/candidats-recrutement-personnel-specialise/',
    //   toPath: '/candidats/',
    //   isPermanent: true,
    // });
    // createRedirect({
    //   fromPath: '/coordonnees/',
    //   toPath: '/nous-joindre/',
    //   isPermanent: true,
    // });
    /**
     * /plan.php
     * /boucher.php
     * /consultation.php
     * /couts.php
     * /spermogramme.php
     * /joindre.php
     */
    /**
     * Page creations
     */
    try {
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
            throw new core_common_1.AppError({
                name: core_common_1.ERROR_TYPE.GATSBY_ERROR,
                message: `Could not retrieve siteMetadata`,
            });
        }
        const siteMetadata = allSiteData.data.site.siteMetadata;
        const pagesData = await graphql(`
        query GatsbyNodePages {
          allContentfulPage {
            edges {
              node {
                node_locale
                id
                name
                route
              }
            }
          }
        }
      `);
        if (pagesData.errors) {
            throw new Error('Error while retrieving pages');
        }
        /**
         * Automatically create pages based on the Page Collection in Contentful
         */
        const pageTemplate = path_1.default.resolve(`src/templates/page.template.tsx`);
        pagesData?.data?.allContentfulPage.edges
            .filter((edge) => {
            if (!(edge && edge.node)) {
                return false;
            }
            return true;
        })
            .forEach((edge, index) => {
            core_utils_1.log(`Creating page: ${edge.node.route}`, {
                toolName: 'valentine-website',
            });
            createPage({
                path: edge.node.route,
                context: {
                    siteMetadata,
                    pageId: edge.node.id,
                },
                component: pageTemplate,
            });
        });
        /**
         * Automatically create blog post pages
         */
        // const blogPosts = await graphql<{
        //   allContentfulBlogPost: {
        //     edges: { node: { id: string; blogSlug: string; node_locale: string } }[];
        //   };
        // }>(
        //   `
        //     query GatsbyNodeBlogPosts {
        //       allContentfulBlogPost {
        //         edges {
        //           node {
        //             node_locale
        //             id
        //             slug
        //           }
        //         }
        //       }
        //     }
        //   `
        // );
        // if (blogPosts.errors) {
        //   throw new Error('Error while retrieving blog posts');
        // }
        // const blogPostTemplate = path.resolve(`src/templates/blog-post.template.tsx`);
        // const blogPageRouteFR = pages?.data?.allContentfulPage.edges
        //   .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'fr-CA')
        //   .map((edge) => edge.node);
        // const blogPageRouteEN = pages?.data?.allContentfulPage.edges
        //   .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'en-CA')
        //   .map((edge) => edge.node);
        // log(`Creating blog posts under: ${blogPageRouteEN?.[0].route}`, {
        //   toolName: 'valentine-website',
        // });
        // log(`Creating blog posts under: ${blogPageRouteFR?.[0].route}`, {
        //   toolName: 'valentine-website',
        // });
        // blogPosts?.data?.allContentfulBlogPost.edges
        //   .filter((edge) => {
        //     if (!(edge && edge.node)) {
        //       return false;
        //     }
        //     return true;
        //   })
        //   .forEach((edge, index) => {
        //     const path =
        //       edge.node.node_locale === 'fr-CA'
        //         ? blogPageRouteFR?.[0]?.route
        //           ? `${blogPageRouteFR?.[0]?.route}${edge.node.blogSlug}`
        //           : `${blogPageRouteFR?.[0]?.route}`
        //         : blogPageRouteEN?.[0]?.route
        //         ? `${blogPageRouteEN?.[0]?.route}${edge.node.blogSlug}`
        //         : `${blogPageRouteEN?.[0]?.route}`;
        //     log(`Creating blog post: ${path}`, {
        //       toolName: 'vsb-website',
        //     });
        //     createPage<GatsbyBlogPostContext>({
        //       path,
        //       component: blogPostTemplate,
        //       context: {
        //         blogPostId: edge.node.id,
        //         blogPath: path,
        //       },
        //     });
        //   });
    }
    catch (error) {
        core_utils_1.log(`Error occured when generating pages: ${error}`, {
            toolName: 'vsb-website',
            level: core_utils_1.LOG_LEVEL.ERROR,
        });
        if (error) {
            throw new Error('Error while retrieving pages');
        }
    }
};
