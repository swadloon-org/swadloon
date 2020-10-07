import React from 'react';
import { FormFieldFragment, FormFieldGroupFragment } from '../../types/graphql-types';
import { useForm } from 'react-hook-form';

type OwnProps = {
  field?: FormFieldFragment | FormFieldGroupFragment;
};

export const Field: React.FC<OwnProps> = (props) => {
  // switch () {
  //   case 'CHECKBOX':
  //     return <div></div>;
  //   case 'MARKDOWN':
  //     return <div></div>;
  //   case 'SWITCH':
  //     return <div></div>;
  //   case 'TEXT':
  //     return (
  //       <input
  //       //   placeholder={field}
  //       //   type={field.type}
  //       //   name={field.name}
  //       //   id={field.id}
  //       // ref={register({
  //       //   required: 'Required',
  //       //   pattern: {
  //       //     value: /^[A-Za-z]+$/i,
  //       //     message: 'invalid first name',
  //       //   },
  //       // })}
  //       />
  //     );
  //   case 'TEXT_AREA':
  //   //   return <textarea placeholder={field.placeholder} name={field.name} id={field.id}></textarea>;
  // }
  return <div>test</div>;
};
