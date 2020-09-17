import { graphql } from 'gatsby';

export const actionSectionQuery = graphql`
  fragment ActionSection on GraphCMS_ActionSection {
    type
    title
    titleHighlight
    subtitle
    actionText
  }
`;
