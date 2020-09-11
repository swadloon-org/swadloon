import { graphql } from 'gatsby';

export const query = graphql`
  fragment ProcessSection on GraphCMS_ProcessSection {
    processSection {
      title
      titleHighlight
      type {
        title
      }
      steps {
        title
        description
        id
      }
    }
  }
`;
