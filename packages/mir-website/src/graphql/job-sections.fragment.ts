import { graphql } from 'gatsby';

export const jobSectionsQuery = graphql`
  fragment JobSections on GraphCMS_JobSection {
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
