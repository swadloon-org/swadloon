import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
    name
    type {
      ...sectionType
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
    illustration {
      file {
        url
        fileName
      }
      title
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
    imagePosition
    infoTiles {
      ...InfoTile
    }
    infoChecks {
      id
      text
    }
    jobGroup {
      ...JobGroup
    }
    processStep {
      ...ProcessStepFragment
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
      link {
        ...Link
      }
      text {
        text
        childMdx {
          body
        }
      }
      illustration {
        file {
          url
          fileName
        }
        title
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
      imagePosition
      infoTiles {
        ...InfoTile
      }
      infoChecks {
        id
        text
      }
      jobGroup {
        ...JobGroup
      }
      processStep {
        ...ProcessStepFragment
      }
      blogPosts {
        ...BlogPost
      }
    }
  }
`;
