import { graphql } from 'gatsby';

export const actionSectionQuery = graphql`
  fragment ActionSection on GraphCMS_ActionSection {
    type
    title
    titleHighlight
    subtitle
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
  }
`;
