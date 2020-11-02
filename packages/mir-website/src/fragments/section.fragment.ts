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
    }
  }
`;
