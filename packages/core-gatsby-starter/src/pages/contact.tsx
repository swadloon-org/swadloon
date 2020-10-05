import { graphql } from 'gatsby';
import React from 'react';
import { Form } from '../components/form';

export const ContactQuery = graphql`
  query Contact {
    graphCmsForm {
      id
      name
      formFields {
        name
        id
        type
        placeholder
        validations {
          name
          pattern
          required
        }
      }
    }
  }
`;

interface Props {
  data: any;
}

export const Contact: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <Form form={props.data.graphCmsForm}></Form>
      </div>
    </div>
  );
};

export default Contact;
