import { GatsbyNode } from 'gatsby';

/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  /**
   * Page redirections
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
};
