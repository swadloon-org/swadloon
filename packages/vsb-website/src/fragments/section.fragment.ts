import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
    node_locale
    name
    type {
      type
    }
    title
    titleHighlight
    subtitle
    link {
      ...Link
    }
    text {
      text
      childMdx {
        body
      }
    }
    announcements {
      name
      type
      message {
        message
        childMdx {
          body
        }
      }
    }
    backgroundPosition
    medias {
      medias {
        file {
          url
        }
        desktopFluidImage: fluid(quality: 90, maxWidth: 1920) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
        mobileFluidImage: fluid(quality: 90, maxWidth: 768) {
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
  }
`;
