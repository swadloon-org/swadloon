import { GatsbyPageContext } from '@newrade/core-gatsby-config';
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
    const result = await graphql<{
      allContentfulPage: {
        edges: { node: { id: string; route: string } }[];
      };
    }>(
      `
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
      `
    );
    // Handle errors
    if (result.errors) {
      throw new Error('Error while retrieving pages');
    }

    // Create pages for each page
    const pageTemplate = path.resolve(`src/templates/page.template.tsx`);
    result.data.allContentfulPage.edges.forEach((edge, index) => {
      createPage<GatsbyPageContext>({
        path: edge.node.route,
        component: pageTemplate,
        context: {
          pageId: edge.node.id,
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
