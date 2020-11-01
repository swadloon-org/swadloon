import { graphql } from 'gatsby';

export const sectionQuery = graphql`
  fragment Section on ContentfulSection {
    name
    description

    type {
        ...sectionType
    }

    title
    titleHighlight

    link {
        ...Link
    }

    text{
        childMdx {
          body
        }
    }

    illustration {
        file{
            url
        }
    }

    titleTab

    medias{
        image {
            url(transformation: { image: { resize: { width: 500, fit: max } } })
          }
    }
    imagePosition

    infoTile{
        ...InfoTile
    }

    infoChecks {
        id
        text
        }
    }

    jobGroup{
        ...JobGroups
    }

    processStep{
        ...ProcessStep
    }

    subSections {
        ...Section
    }
  }
`;
