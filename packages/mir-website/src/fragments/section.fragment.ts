import { graphql } from 'gatsby';

export const sectionQuery = graphql`
  fragment SectionFragment on ContentfulSection {
    name
    description {
      description
    }
    type {
      ...sectionType
    }
    title
    titleHighlight
    link {
      ...LinkFragment
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
      }
    }
    titleTab
    # medias{
    #     image {
    #         url(transformation: { image: { resize: { width: 500, fit: max } } })
    #       }
    # }
    imagePosition
    infoTiles {
      ...InfoTileFragment
    }
    infoChecks {
      id
      text
    }
    jobGroup {
      ...JobGroupFragment
    }
    processStep {
      ...ProcessStepFragment
    }
    subSections {
      name
      description {
        description
      }
      type {
        ...sectionType
      }
      title
      titleHighlight
      link {
        ...LinkFragment
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
        }
      }
      titleTab
      # medias{
      #     image {
      #         url(transformation: { image: { resize: { width: 500, fit: max } } })
      #       }
      # }
      imagePosition
      infoTiles {
        ...InfoTileFragment
      }
      infoChecks {
        id
        text
      }
      jobGroup {
        ...JobGroupFragment
      }
      processStep {
        ...ProcessStepFragment
      }
    }
  }
`;
