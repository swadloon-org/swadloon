import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
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
        aboveFoldImage: localFile {
          childImageSharp {
            sizes(base64Width: 1920, jpegQuality: 80, jpegProgressive: true) {
              base64
            }
          }
        }
        desktopFluidImage: localFile {
          childImageSharp {
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
        # mobileFluidImage: localFile {
        #   childImageSharp {
        #     fluid(quality: 90, maxWidth: 768) {
        #       base64
        #       aspectRatio
        #       src
        #       srcSet
        #       srcWebp
        #       srcSetWebp
        #       sizes
        #     }
        #   }
        # }
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
        fixed: localFile {
          childImageSharp {
            fixed(base64Width: 1920, quality: 100) {
              base64
            }
          }
        }
      }
    }
  }
`;
