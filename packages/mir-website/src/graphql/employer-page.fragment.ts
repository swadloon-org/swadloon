import { graphql } from 'gatsby';

export const query = graphql`
  fragment EmployerPage on GraphCMS_EmployerPage {
    bannerTitle
    actionSections {
      title
      subtitle
      actionText
    }
    jobSection {
      title
      titleHighlight
      type {
        title
        type
      }
      groups {
        typeName {
          id
          title
          jobGroup {
            jobs {
              id
              title
            }
          }
        }
      }
    }
    infoSections {
      title
      titleHighlight
      titleTab
      type
      text
      showTabs
      actionText
      infoTiles {
        illustration
        title
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
      }
      image {
        url(transformation: { image: { resize: { width: 900, fit: max } } })
      }
    }
  }
`;
