import { GatsbyBlogPostContext, GatsbyPageContext } from '@newrade/core-gatsby-config';
import { loadDotEnv, log, LOG_LEVEL } from '@newrade/core-utils';
import { GatsbyNode } from 'gatsby';
import path from 'path';
import { ENV } from './types/dot-env';

/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

const env = loadDotEnv<ENV>(path.resolve(__dirname, '.env'));

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
   * Page creations
   */
  try {
    const pages = await graphql<{
      allContentfulPage: {
        edges: { node: { id: string; name: string; route: string; node_locale: string } }[];
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
                route
              }
            }
          }
        }
      `
    );
    if (pages.errors) {
      throw new Error('Error while retrieving pages');
    }
    /**
     * Automatically create pages based on the Page Collection in Contentful
     */
    const pageTemplate = path.resolve(`src/templates/page.template.tsx`);
    pages.data.allContentfulPage.edges
      .filter((edge) => {
        if (!(edge && edge.node)) {
          return false;
        }

        return true;
      })
      .forEach((edge, index) => {
        log(`Creating page: ${edge.node.route}`, {
          toolName: 'mir-website',
        });
        createPage<GatsbyPageContext>({
          path: edge.node.route,
          component: pageTemplate,
          context: {
            pageId: edge.node.id,
          },
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
    const blogPageRouteFR = pages.data.allContentfulPage.edges
      .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'fr-CA')
      .map((edge) => edge.node);
    const blogPageRouteEN = pages.data.allContentfulPage.edges
      .filter((edge) => edge.node.name.includes('Blogue') && edge.node.node_locale === 'en-CA')
      .map((edge) => edge.node);

    log(`Creating blog posts under: ${blogPageRouteEN[0].route}`, {
      toolName: 'mir-website',
    });

    log(`Creating blog posts under: ${blogPageRouteFR[0].route}`, {
      toolName: 'mir-website',
    });

    blogPosts.data.allContentfulBlogPost.edges
      .filter((edge) => {
        if (!(edge && edge.node)) {
          return false;
        }
        return true;
      })
      .forEach((edge, index) => {
        const path =
          edge.node.node_locale === 'fr-CA'
            ? blogPageRouteFR[0]?.route
              ? `${blogPageRouteFR[0]?.route}${edge.node.blogSlug}`
              : `${blogPageRouteFR[0]?.route}`
            : blogPageRouteEN[0]?.route
            ? `${blogPageRouteEN[0]?.route}${edge.node.blogSlug}`
            : `${blogPageRouteEN[0]?.route}`;

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
