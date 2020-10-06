import { graphql } from 'gatsby';

export const formQuery = graphql`
  fragment Form on GraphCMS_Form {
    id
    name
    formFields {
      ... on GraphCMS_FormField {
        ...FormField
      }

      ... on GraphCMS_FormFieldGroup {
        ...FormFieldGroup
      }
    }
  }
`;
