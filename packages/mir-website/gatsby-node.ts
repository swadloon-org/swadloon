import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { GatsbyBlogPostContext, GatsbyPageContext } from '@newrade/core-gatsby-config';
import { log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { GatsbyNodeAllSiteQuery, GatsbyNodeSiteMetadataFragment } from './types/graphql-types';

/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
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
   * Page creations Site - metadata
   */
  try {
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

    const siteMetadata: GatsbyNodeSiteMetadataFragment = allSiteData.data.site.siteMetadata;

    /**
     * Page creations contentful
     */
    const pagesData = await graphql<{
      allContentfulPage: {
        edges: { node: { id: string; name: string; slug: string; node_locale: string } }[];
      };
    }>(
      `
        query GatsbyNodePages {
          allContentfulPage {
            edges {
              node {
                node_locale
                id
                name
                slug
              }
            }
          }
        }
      `
    );
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
          toolName: 'mir-website',
        });
        createPage<GatsbyPageContext<GatsbyNodeSiteMetadataFragment>>({
          path: edge.node.slug,
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
      toolName: 'mir-website',
    });

    log(`Creating blog posts under: ${blogPageRouteFR?.[0].slug}`, {
      toolName: 'mir-website',
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
          toolName: 'mir-website',
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
  } catch (error) {
    log(`Error occured when generating pages: ${error}`, {
      toolName: 'mir-website',
      level: LOG_LEVEL.ERROR,
    });
    if (error) {
      throw new Error('Error while retrieving pages');
    }
  }
};
