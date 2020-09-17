import { graphql } from 'gatsby';

export const processSectionsQuery = graphql`
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
