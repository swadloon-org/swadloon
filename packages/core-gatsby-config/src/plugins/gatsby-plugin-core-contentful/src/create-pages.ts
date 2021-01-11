import { log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyBlogPostContext, GatsbyContentfulPageContext } from '../../../config/page-config';
import { SITE_LANGUAGES } from '../../../config/site-languages';
import { GatsbyCoreContentfulPluginOptions } from '../gatsby-plugin-options';

export const createPagesFunction: GatsbyNode['createPages'] = async ({ actions, graphql }, options) => {
  const { createPage, deletePage } = actions;
  const pluginOptions = (options as unknown) as GatsbyCoreContentfulPluginOptions;

  /**
   * Page creations Site - metadata
   */
  try {
    /**
     * Page creations contentful
     */

    log(`Creating pages for locales: ${pluginOptions.locales}`, {
      toolName: pluginOptions.packageName,
    });

    const pagesData = await graphql<{
      allContentfulPage: {
        edges: { node: { id: string; name: string; slug: string; node_locale: string; type: { type: string } } }[];
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
                type {
                  type
                }
                slug
              }
            }
          }
        }
      `,
      {
        locales: pluginOptions.locales,
      }
    );

    log(`Retrived: ${pagesData.data?.allContentfulPage.edges.length} pages`, {
      toolName: pluginOptions.packageName,
    });

    if (pagesData.errors) {
      throw new Error('Error while retrieving pages');
    }
    /**
     * Automatically create pages based on the Page Collection in Contentful
     */
    const pageTemplate = path.resolve(`src/templates/page.template.tsx`);

    pagesData?.data?.allContentfulPage.edges
      .filter((edge) => {
        if (!(edge && edge.node)) {
          return false;
        }

        return true;
      })
      .forEach((edge, index) => {
        log(`Creating page: ${edge.node.slug}`, {
          toolName: pluginOptions.packageName,
        });
        createPage<GatsbyContentfulPageContext>({
          path: edge.node.slug,
          context: {
            siteMetadata: {} as any, // will be set by the gatsby-plugin-core plugin
            pageId: edge.node.id,
            id: edge.node.id,
            name: edge.node.name,
            type: edge.node.type.type,
            slug: edge.node.slug,
            locale: edge.node.node_locale as SITE_LANGUAGES,
            layout: 'SITE',
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
      const blogPageRouteFR = pagesData?.data?.allContentfulPage.edges
        .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'fr-CA')
        .map((edge) => edge.node);
      const blogPageRouteEN = pagesData?.data?.allContentfulPage.edges
        .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'en-CA')
        .map((edge) => edge.node);

      log(`Creating blog posts under: ${blogPageRouteEN?.[0].slug}`, {
        toolName: pluginOptions.packageName,
      });

      log(`Creating blog posts under: ${blogPageRouteFR?.[0].slug}`, {
        toolName: pluginOptions.packageName,
      });

      blogPosts?.data?.allContentfulBlogPost.edges
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

          log(`Creating blog post: ${path}`, {
            toolName: pluginOptions.packageName,
          });

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
    log(`Error occured when generating pages: ${error}`, {
      toolName: pluginOptions.packageName,
      level: LOG_LEVEL.ERROR,
    });
    if (error) {
      throw new Error('Error while retrieving pages');
    }
  }
};
