import { loadDotEnv } from '@newrade/core-utils';
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

  const result = await graphql<any>(
    `
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
    `
  );
  // Handle errors
  if (result.errors) {
    console.log('Oh booi this is not good');
    return;
  }
  // Create pages for each page
  const pageTemplate = path.resolve(`src/templates/index-page.template.tsx`);
  result.data.allContentfulPage.edges.forEach((page: any, index) => {
    createPage({
      path: page.node.Route,
      component: pageTemplate,
      context: {
        id: page.node.id,
      },
    });
  });
};
