import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyBlogPostContext, GatsbyContentfulPageContext } from '../../../config/page-config';
import { GatsbyNodeAllSiteQuery, GatsbyNodeSiteMetadataFragment } from '../../../config/site-graphql-types';
import { SITE_LANGUAGES } from '../../../config/site-languages';
import { GatsbyCoreContentfulPluginOptions } from '../gatsby-plugin-options';

let siteMetadata: GatsbyNodeSiteMetadataFragment;

export const createPagesFunction: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions;
  const pluginOptions = (options as unknown) as GatsbyCoreContentfulPluginOptions;

  try {
    /**
     * Query for site metadata
     */
    const allSiteData = await graphql<GatsbyNodeAllSiteQuery>(`
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
      throw new AppError({
        name: ERROR_TYPE.GATSBY_ERROR,
        message: `Could not retrieve siteMetadata`,
      });
    }

    siteMetadata = allSiteData.data.site.siteMetadata;

    /**
     * Page creations contentful
     */

    reporter.info(`[${pluginOptions.pluginName}] creating pages for locales ${pluginOptions.locales}`);

    const pagesData = await graphql<{
      allContentfulPage: {
        edges: {
          node: {
            node_locale: string;
            id: string;
            name: string;
            category: string;
            slug: string;
            type: { type: string };
          };
        }[];
      };
    }>(
      `
        query GatsbyContentfulPages($locales: [String]) {
          allContentfulPage(filter: { node_locale: { in: $locales } }) {
            edges {
              node {
                node_locale
                id
                name
                category
                slug
                type {
                  type
                }
              }
            }
          }
        }
      `,
      {
        locales: pluginOptions.locales,
      }
    );

    reporter.info(`[${pluginOptions.pluginName}] found ${pagesData.data?.allContentfulPage.edges.length} pages`);

    if (pagesData.errors) {
      throw new Error('Error while retrieving pages');
    }

    /**
     * Automatically create pages based on the Page Collection in Contentful
     */
    const pageTemplate = path.resolve(`src/templates/contentful-page.template.tsx`);

    pagesData.data?.allContentfulPage.edges
      .filter((edge) => {
        if (!(edge && edge.node)) {
          return false;
        }

        return true;
      })
      .forEach((edge, index) => {
        reporter.info(`[${pluginOptions.pluginName}] creating page: ${edge.node.slug}`);

        createPage<GatsbyContentfulPageContext>({
          path: edge.node.slug,
          context: {
            siteMetadata,
            pageId: edge.node.id,
            id: edge.node.id,
            name: edge.node.name,
            dirName: edge.node.category,
            type: edge.node.type.type,
            slug: edge.node.slug,
            locale: edge.node.node_locale as SITE_LANGUAGES,
            layout: 'default',
            template: 'default',
          },
          component: pageTemplate,
        });
      });

    if (pluginOptions.features.blog) {
      /**
       * Automatically create blog post pages
       */
      const blogPosts = await graphql<{
        allContentfulBlogPost: {
          edges: { node: { id: string; blogSlug: string; node_locale: string } }[];
        };
      }>(
        `
          query GatsbyNodeBlogPosts {
            allContentfulBlogPost {
              edges {
                node {
                  node_locale
                  id
                  blogSlug
                }
              }
            }
          }
        `
      );
      if (blogPosts.errors) {
        throw new Error('Error while retrieving blog posts');
      }

      const blogPostTemplate = path.resolve(`src/templates/blog-post.template.tsx`);
      const blogPageRouteFR = pagesData.data?.allContentfulPage.edges
        .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'fr-CA')
        .map((edge) => edge.node);
      const blogPageRouteEN = pagesData.data?.allContentfulPage.edges
        .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'en-CA')
        .map((edge) => edge.node);

      reporter.info(`[${pluginOptions.pluginName}] creating blog posts under: ${blogPageRouteEN?.[0].slug}`);

      reporter.info(`[${pluginOptions.pluginName}] creating blog posts under: ${blogPageRouteFR?.[0].slug}`);

      blogPosts.data?.allContentfulBlogPost.edges
        .filter((edge) => {
          if (!(edge && edge.node)) {
            return false;
          }
          return true;
        })
        .forEach((edge, index) => {
          const path =
            edge.node.node_locale === 'fr-CA'
              ? blogPageRouteFR?.[0]?.slug
                ? `${blogPageRouteFR?.[0]?.slug}${edge.node.blogSlug}`
                : `${blogPageRouteFR?.[0]?.slug}`
              : blogPageRouteEN?.[0]?.slug
              ? `${blogPageRouteEN?.[0]?.slug}${edge.node.blogSlug}`
              : `${blogPageRouteEN?.[0]?.slug}`;

          reporter.info(`[${pluginOptions.pluginName}] creating blog post ${path}`);

          createPage<GatsbyBlogPostContext>({
            path,
            component: blogPostTemplate,
            context: {
              blogPostId: edge.node.id,
              blogPath: path,
            },
          });
        });
    }
  } catch (error) {
    reporter.error(`[${pluginOptions.pluginName}] error occured when generating pages: ${error}`);

    reporter.panic(error);
  }
};
