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
    actionText # to remove
    link {
      name
      label
      type
      url
      page {
        route
      }
    }
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
      actionText # to remove
      link {
        name
        label
        type
        url
        page {
          route
        }
      }
      illustration
    }
    image {
      bannerImageMobile: localFile {
        ...MobileFluidImage
      }
      bannerImageDesktop: localFile {
        ...DesktopFluidImage
      }
    }
  }
`;
