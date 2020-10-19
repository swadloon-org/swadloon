import { graphql } from 'gatsby';

export const processSectionsQuery = graphql`
  fragment ProcessSections on ContentfulProcessSection {
    title
    titleHighlight
    type {
      title
    }
    steps {
      title
      description{
        childMdx {
          body
        }
      }
      id
    }
  }
`;
