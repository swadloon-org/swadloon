import { graphql } from 'gatsby';

export const pageQuery = graphql`
  fragment PageFragment on ContentfulPage {
    id
    name
    node_locale
    description {
      description
      childMdx {
        body
      }
    }
    title
    slug
    bannerTitle
    bannerSubTitle
    bannerImages {
      name
      medias {
        file {
          url
        }
        socialMediaImage: resize(width: 1200) {
          src
          width
          height
        }
        desktopFluidImage: fluid(quality: 90, maxWidth: 800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
        mobileFluidImage: fluid(quality: 90, maxWidth: 400) {
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
    sections {
      ...Section
    }
  }
`;
