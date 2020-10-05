import { graphql } from 'gatsby';

export const formQuery = graphql`
  fragment Form on GraphCMS_Form {
    id
    name
    formFields {
      ...FormField
    }
  }
`;
