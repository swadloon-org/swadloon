import { graphql } from 'gatsby';

export const infoSectionsQuery = graphql`
  fragment InfoSections on ContentfulInfoSection {
    title
    titleHighlight
    titleTab
    type
    text{
      childMdx {
        body
      }
    }
    illustration
    showTabs
    link {
      type
      name
      label
      url
    }
    infoTile {
      illustration
      title
      text{
        childMdx {
          body
        }
      }
    }
    infoChecks {
      id
      text
      }
    }
    childs {
      showTabs
      title
      titleHighlight
      titleTab
      type
      text{
        childMdx {
          body
        }
      }
      link {
        type
        name
        label
        url
      }
      illustration
    }
    image {
      url(transformation: { image: { resize: { width: 500, fit: max } } })
    }
  }
`;
