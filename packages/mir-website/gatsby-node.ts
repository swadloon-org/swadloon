import { createGatsbyWebpackConfig } from '@newrade/core-gatsby-config';
import { log, LOG_LEVEL } from '@newrade/core-utils';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { GatsbyNode } from 'gatsby';

/**
 * Gatsby Node Configuration
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */

require('dotenv').config();

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-treat',
    options: {},
  });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const isProduction = stage !== `develop`;
  const isSSR = stage.includes(`html`);
  actions.setWebpackConfig(createGatsbyWebpackConfig({ isProduction, stage, isSSR, loaders, plugins }));
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

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

  // const blogPageQuery = await graphql(`
  //   query BlogPostPage {
  //     site {
  //       siteMetadata {
  //         siteUrl
  //         languages {
  //           defaultLangKey
  //           langs
  //         }
  //       }
  //     }
  //     gcms {
  //       companyInfos(first: 1) {
  //         companyName
  //         linkedinPageUrl
  //         facebookPageUrl
  //         instagramPageUrl
  //         twitterPageUrl
  //         logo {
  //           fileName
  //           url
  //         }
  //         logoFooter {
  //           fileName
  //           url
  //         }
  //         metadataTwitter
  //         metadataTwitterCreator
  //         metadataSiteName
  //       }
  //       pages(where: { name: "Blog" }, locales: [fr, en]) {
  //         actionSections {
  //           type
  //           title
  //           titleHighlight
  //           subtitle
  //           actionText # to remove
  //           link {
  //             name
  //             label
  //             type
  //             url
  //             page {
  //               route
  //             }
  //           }
  //         }
  //       }
  //       blogPosts {
  //         id
  //         title
  //       }
  //       routes: pages(where: { NOT: { name: "Not Found" } }, locales: [fr, en]) {
  //         name
  //         title
  //         route
  //       }
  //     }
  //     bannerImageMobile: file(name: { eq: "Banner-NewWebsite" }) {
  //       id
  //       childImageSharp {
  //         # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
  //         fluid(quality: 90, maxWidth: 800) {
  //           base64
  //           aspectRatio
  //           src
  //           srcSet
  //           srcWebp
  //           srcSetWebp
  //           sizes
  //         }
  //       }
  //     }
  //     bannerImageDesktop: file(name: { eq: "Banner-NewWebsite" }) {
  //       id
  //       childImageSharp {
  //         # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
  //         fluid(quality: 90, maxWidth: 1920) {
  //           base64
  //           aspectRatio
  //           src
  //           srcSet
  //           srcWebp
  //           srcSetWebp
  //           sizes
  //         }
  //       }
  //     }
  //     linkedInBanner: file(name: { eq: "Banner-NewWebsite" }) {
  //       id
  //       childImageSharp {
  //         fixed(width: 1200, height: 628) {
  //           base64
  //           aspectRatio
  //           src
  //           srcSet
  //           srcWebp
  //           srcSetWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  type PageConfig = {
    name: string;
    templatePath: string;
    path: string;
    lang: 'en' | 'fr';
  };
};

// export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
//   node,
//   actions,
//   store,
//   cache,
//   reporter,
//   createNodeId,
// }) => {
//   if (node.internal.type === 'Image') {
//     const { createNode } = actions;

//     /* Download the image and create the File node. Using gatsby-plugin-sharp and gatsby-transformer-sharp the node will become an ImageSharp. */

//     const fileNode = await createRemoteFileNode({
//       url: (node as any).url, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       store, // Gatsby's redux store
//       cache, // get Gatsby's cache
//       reporter,
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//     });

//     if (fileNode) {
//       // link the File node to Image node at field image
//       (node as any).image___NODE = fileNode.id;
//     }
//   }
// };

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = (args, options, callback) => {
  log(`GATSBY_ENABLE_INCREMENTAL_BUILD is set to "${process.env.GATSBY_ENABLE_INCREMENTAL_BUILD}"`, {
    toolName: 'mir-website',
  });

  if (process.env.GATSBY_ENABLE_INCREMENTAL_BUILD !== 'true') {
    callback(null);
    return;
  }

  log(`rebuilding core-* packages for gatsby cloud's incremental build`, {
    toolName: 'mir-website',
  });

  const cwd = spawn(`yarn postinstall`, {
    cwd: '../..',
    shell: true,
    env: process.env,
  });

  cwd.stdout.on('data', (data) => {
    log(`${data}`, {
      toolName: 'mir-website',
    });
  });

  cwd.stdout.on('error', (data) => {
    log(`rebuilding core-* packages: ${chalk.green('error')}`, {
      toolName: 'mir-website',
      level: LOG_LEVEL.ERROR,
    });
    log(data?.message, {
      toolName: 'mir-website',
      level: LOG_LEVEL.ERROR,
    });
    callback(data);
  });

  cwd.on('close', (code) => {
    log(`rebuilding core-* packages: ${chalk.green('done')}`, {
      toolName: 'mir-website',
    });
    callback(null);
  });
};
