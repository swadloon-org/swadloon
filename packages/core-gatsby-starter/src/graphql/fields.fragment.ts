import { graphql } from 'gatsby';

export const formFieldQuery = graphql`
  fragment FormField on GraphCMS_FormField {
    name
    placeholder
    id
    type
    validations {
      errorMessage
      matchPattern
      name
      pattern
      required
      unique
    }
  }
`;
