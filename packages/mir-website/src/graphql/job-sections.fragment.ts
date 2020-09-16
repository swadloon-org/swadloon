import { graphql } from 'gatsby';

export const query = graphql`
  fragment JobSections on GraphCMS_JobSection {
    title
    titleHighlight
    type {
      title
      type
    }
    groups {
      typeName {
        id
        title
        jobGroup {
          jobs {
            id
            title
          }
        }
      }
    }
  }
`;
