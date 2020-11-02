import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
    name
    type {
      ...sectionType
    }
    title
    titleHighlight
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
      }
    }
    # medias{
    #     image {
    #         url(transformation: { image: { resize: { width: 500, fit: max } } })
    #       }
    # }
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
        }
      }
      # medias{
      #     image {
      #         url(transformation: { image: { resize: { width: 500, fit: max } } })
      #       }
      # }
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
