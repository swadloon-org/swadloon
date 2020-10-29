"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const core_utils_1 = require("@newrade/core-utils");
const bluebird_1 = __importDefault(require("bluebird"));
const path_1 = __importDefault(require("path"));
/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
const env = core_utils_1.loadDotEnv(path_1.default.resolve(__dirname, '.env'));
exports.createPages = async ({ graphql, actions: { createPage, createRedirect } }) => {
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
    // exports.createPages = ({ graphql, actions }) => {
    //   const { createPage } = actions;
    return new bluebird_1.default((resolve, reject) => {
        const pagesTemplate = path_1.default.resolve('./src/templates/index-page.template.tsx');
        resolve(graphql(`
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
        `).then((result) => {
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
        }));
    });
};
/**
 * Page generation
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
