import { spawnSync, spawn } from 'child_process';
import crypto from 'crypto';
import { GatsbyNode, graphql } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { log, LOG_LEVEL } from 'core-utils';
import { createGatsbyWebpackConfig } from './webpack.config';
import chalk from 'chalk';
import path from 'path';

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

  const blogPageQuery = await graphql(`
    query BlogPostPage {
      site {
        siteMetadata {
          siteUrl
          languages {
            defaultLangKey
            langs
          }
        }
      }
      gcms {
        companyInfos(first: 1) {
          companyName
          linkedinPageUrl
          facebookPageUrl
          instagramPageUrl
          twitterPageUrl
          logo {
            fileName
            url
          }
          logoFooter {
            fileName
            url
          }
          metadataTwitter
          metadataTwitterCreator
          metadataSiteName
        }
        pages(where: { name: "Blog" }, locales: [fr, en]) {
          actionSections {
            type
            title
            titleHighlight
            subtitle
            actionText # to remove
            link {
              name
              label
              type
              url
              page {
                route
              }
            }
          }
        }
        blogPosts {
          id
          title
        }
        routes: pages(where: { NOT: { name: "Not Found" } }, locales: [fr, en]) {
          name
          title
          route
        }
      }
      bannerImageMobile: file(name: { eq: "Banner-NewWebsite" }) {
        id
        childImageSharp {
          # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
          fluid(quality: 90, maxWidth: 800) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      bannerImageDesktop: file(name: { eq: "Banner-NewWebsite" }) {
        id
        childImageSharp {
          # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
          fluid(quality: 90, maxWidth: 1920) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      linkedInBanner: file(name: { eq: "Banner-NewWebsite" }) {
        id
        childImageSharp {
          fixed(width: 1200, height: 628) {
            src
          }
        }
      }
    }
  `);

  type PageConfig = {
    name: string;
    templatePath: string;
    path: string;
    lang: 'en' | 'fr';
  };

  const pagesConfig: PageConfig[] = [
    {
      name: 'post',
      path: `/nouvelles/individu-au-coeur-de-notre-travail`,
      templatePath: 'src/templates/blog-article.template.tsx',
      lang: 'fr',
    },
    {
      name: 'post en',
      path: `/en/news/individu-au-coeur-de-notre-travail`,
      templatePath: 'src/templates/blog-article.template.tsx',
      lang: 'en',
    },
  ];

  pagesConfig.forEach((page) => {
    createPage({
      context: { name: page.name, data: blogPageQuery.data, lang: page.lang },
      component: path.resolve(page.templatePath),
      path: page.path,
    });
  });
};

// // from https://mcro.tech/gatsby-image-sharp/
// export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, createNodeId }) => {
//   const turnImageObjectIntoGatsbyNode = (image: ImageObject, project: Project) => {
//     const content = {
//       content: project.title,
//       ['image___NODE']: createNodeId(`project-image-{${project.id}}`),
//     };
//     const nodeId = createNodeId(`image-{${image.id}}`);
//     const nodeContent = JSON.stringify(image);
//     const nodeContentDigest = crypto.createHash('md5').update(nodeContent).digest('hex');

//     const nodeData = {
//       ...image,
//       ...content,
//       id: nodeId,
//       parent: null,
//       children: [],
//       internal: {
//         type: 'Image',
//         content: nodeContent,
//         contentDigest: nodeContentDigest,
//       },
//     };
//     return nodeData;
//   };

//   const createImageObjectFromURL = ({ source, fileName }: Image): ImageObject => {
//     const lastIndexOfSlash = source.lastIndexOf('/');
//     const id = source.slice(lastIndexOfSlash + 1, source.lastIndexOf('.'));
//     return { id, image: id, url: source, fileName };
//   };

//   type Image = {
//     id: number;
//     fileName: string;
//     source: string;
//   };

//   type ImageObject = {
//     id: string;
//     image: string;
//     fileName: string;
//     url: string;
//   };

//   type Project = {
//     id: number;
//     title: string;
//     images: Image[];
//   };

//   const { createNode } = actions;
//   const projects = [
//     {
//       id: 1,
//       title: 'First Project',
//       images: [
//         {
//           id: 1,
//           fileName: 'one',
//           source: 'https://media.graphcms.com/rBJ6mgb6QCfOv25Rboww',
//         },
//         {
//           id: 2,
//           fileName: 'two',
//           source: 'https://media.graphcms.com/rBJ6mgb6QCfOv25Rboww',
//         },
//       ],
//     },
//   ];
//   // const projects = await service.getProjects();

//   projects.forEach((project: Project) => {
//     project.images.map((image: Image) => {
//       const imgObj = createImageObjectFromURL(image);
//       const nodeData = turnImageObjectIntoGatsbyNode(imgObj, project);
//       createNode(nodeData);
//     });
//   });
// };

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

  const cwd = spawn(`yarn build --scope core-*`, {
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
