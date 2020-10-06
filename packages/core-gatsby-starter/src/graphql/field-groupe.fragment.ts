import { graphql } from 'gatsby';

export const FormFieldGroupQuery = graphql`
  fragment FormFieldGroup on GraphCMS_FormFieldGroup {
    formFields {
      name
      placeholder
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
  }
`;
