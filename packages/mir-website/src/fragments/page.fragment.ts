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
    route
    bannerTitle
    bannerSubTitle
    bannerImages {
      name
      medias {
        file {
          url
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
        mobileFluidImage: fluid(quality: 90, maxWidth: 800) {
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
