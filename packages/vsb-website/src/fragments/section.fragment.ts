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
      title
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
        desktopFluidImage: fluid(quality: 90, maxHeight: 800) {
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
    subSections {
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
          desktopFluidImage: fluid(quality: 90, maxHeight: 800) {
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
    }
  }
`;
