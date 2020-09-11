import { graphql } from 'gatsby';

export const query = graphql`
  fragment ProcessSections on GraphCMS_ProcessSection {
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
`;
