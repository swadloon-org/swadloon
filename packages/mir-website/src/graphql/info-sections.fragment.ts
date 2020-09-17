import { graphql } from 'gatsby';

export const infoSectionsQuery = graphql`
  fragment InfoSections on GraphCMS_InfoSection {
    title
    titleHighlight
    titleTab
    type
    text
    illustration
    showTabs
    actionText
    infoTiles {
      illustration
      title
      text
    }
    infoChecks {
      id
      text
    }
    childs {
      showTabs
      title
      titleHighlight
      titleTab
      type
      text
      actionText
      illustration
    }
    image {
      url(transformation: { image: { resize: { width: 500, fit: max } } })
    }
  }
`;
