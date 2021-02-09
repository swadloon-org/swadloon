import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
    id
    node_locale
    name
    type {
      type
    }
    variant
    title
    titleHighlight
    subtitle
    link {
      ...Link
    }
    text {
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
    steps {
      id
      title
      text {
        childMdx {
          body
        }
      }
    }
    costItems {
      id
      title
      subtitle
      price
    }
    backgroundPosition
    medias {
      medias {
        file {
          url
        }
        # aboveTheFold: localFile {
        #   childImageSharp {
        #     fluid(quality: 90, maxWidth: 1920, base64Width: 400) {
        #       base64
        #     }
        #   }
        # }
        desktopFluidImage: localFile {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920, base64Width: 400) {
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
        mobileFluidTallImage: localFile {
          childImageSharp {
            fluid(quality: 90, maxHeight: 630) {
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
    }
  }
`;
