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
    medias {
      medias {
        file {
          url
        }
        desktopFluidImage: fluid(quality: 90, maxWidth: 1920) {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
        mobileFluidImage: fluid(quality: 90, maxWidth: 768) {
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
