import { graphql } from 'gatsby';

export const query = graphql`
  fragment ActionSection on GraphCMS_ActionSection {
    type
    title
    titleHighlight
    subtitle
    actionText
  }
`;
