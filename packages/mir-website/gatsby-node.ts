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
};
