import { graphql } from 'gatsby';

export const jobSectionsQuery = graphql`
  fragment JobSections on ContentfulJobSection {
    title
    titleHighlight
    type {
      title
      type
    }
    groups {
      illustration
      typeName {
        id
        title
      }
      jobs {
        id
        title
      }
    }
  }
`;
