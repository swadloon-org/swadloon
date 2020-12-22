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
    subTitle
    link {
      ...Link
    }
    text {
      text
      childMdx {
        body
      }
    }

    medias {
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

    blogPosts {
      ...BlogPost
    }

    


    subSections {
      name
      type {
        ...sectionType
      }
      title
      titleHighlight
      subTitle
      variant
      link {
        ...Link
      }
      text {
        text
        childMdx {
          body
        }
      }

      medias {
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
      blogPosts {
        ...BlogPost
      }
    }
  }
`;
