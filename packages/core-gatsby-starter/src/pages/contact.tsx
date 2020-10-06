import { graphql } from 'gatsby';
import React from 'react';
import { Form } from '../components/form';

export const ContactQuery = graphql`
  query Contact {
    graphCmsForm {
      id
      name
      formFields {
        ... on GraphCMS_FormField {
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
        ... on GraphCMS_FormFieldGroup {
          id
          formFields {
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
        }
      }
    }
  }
`;

interface Props {
  data: any;
}

export const Contact: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div>
        <Form form={data.graphCmsForm}></Form>
      </div>
    </div>
  );
};

export default Contact;
