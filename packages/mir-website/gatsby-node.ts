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

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage, createRedirect } }) => {
  /**
   * Permanent redirects
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
   * Page generation
   */
  type PageConfig = {
    name: string;
    templatePath: string;
    path: string;
    lang: 'en' | 'fr';
  };

  const pages = await graphql<[]>(`
    query PageQuery {
      pageCollection {
        items {
          sys {
            id
          }
          name
          route
        }
      }
    }
  `);

  if (!(pages && pages.data && pages.data.length)) {
    throw new Error('No page could be fetched from the GraphQL API');
  }

  pages.data.forEach((page) => {
    console.log(page);
  });

  // createPage({
  //   path: `/my-sweet-new-page/`,
  //   component: path.resolve(`./src/templates/my-sweet-new-page.js`),
  //   // The context is passed as props to the component as well
  //   // as into the component's GraphQL query.
  //   context: {
  //     id: `123456`,
  //   },
  // });
};
