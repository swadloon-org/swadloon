import { graphql } from 'gatsby';

export const formFieldValidationQuery = graphql`
  fragment FormFieldValidation on GraphCMS_FormFieldValidation {
    name
    pattern
    required
  }
`;
