import { loadDotEnv } from '@newrade/core-utils';
import Promise from 'bluebird';
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
   * Page generation
   */

  /**
   * Test Elliot
   * Why the allContentfulPage doesn't work. the type of the query doesn't contain allcontentfulPage ???
   */

  // exports.createPages = ({ graphql, actions }) => {
  //   const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pagesTemplate = path.resolve('./src/templates/index-page.template.tsx');
    resolve(
      graphql<[]>(
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
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const pages = result.data.allContentfulPage.edges;
        pages.forEach((page, index) => {
          createPage({
            path: page.node.Route,
            component: pagesTemplate,
            context: {
              id: page.node.id,
            },
          });
        });
      })
    );
  });
};

/**
 * End Test Elliot
 */

// type PageConfig = {
//   name: string;
//   templatePath: string;
//   path: string;
//   lang: 'en' | 'fr';
// };

// const pageTemplate = path.resolve('./src/templates/index-page.template.ts');
// const pages = await graphql<any>(`
//   query MyQuery {
//     allContentfulPage {
//       edges {
//         node {
//           id
//           Route
//         }
//       }
//     }
//   }
// `);

// if (!(pages && pages.data && pages.data.length)) {
//   throw new Error('No page could be fetched from the GraphQL API');
// }

// pages.data.forEach((page: any, index) => {
//   console.log(page);
//   createPage({
//     path: `/design/`,
//     component: pageTemplate,
//     context: {
//       id: `e0ff8dfc-18d4-5ce3-a004-ec0f8c28d913`,
//     },
//   });
// });

// createPage({
//   path: `/my-sweet-new-page/`,
//   component: path.resolve(`./src/templates/my-sweet-new-page.js`),
//   // The context is passed as props to the component as well
//   // as into the component's GraphQL query.
//   context: {
//     id: `123456`,
//   },
// });
