import { graphql } from 'gatsby';

export const query = graphql`
  fragment AboutPage on GraphCMS_AboutPage {
    metadata {
      title
      description
      route
    }
    bannerTitle
    actionSections {
      title
      subtitle
      actionText
    }
    infoSections {
      ...InfoSections
    }
    testimonialSections {
      title
      titleHighlight
      description
      testomonials {
        authorName
        authorTitle
        message
        id
      }
    }
  }
`;
