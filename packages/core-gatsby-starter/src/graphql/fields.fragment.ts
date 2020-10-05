import { graphql } from 'gatsby';

export const formFieldQuery = graphql`
  fragment FormField on GraphCMS_FormField {
    name
    type
    validations {
      ...FormFieldValidation
    }
  }
`;
