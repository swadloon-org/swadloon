import React from 'react';
import { FormFieldFragment } from '../../types/graphql-types';
import { useForm } from 'react-hook-form';

type OwnProps = {
  field: FormFieldFragment;
};

export const Field: React.FC<OwnProps> = ({ field }) => {
  switch (field.type) {
    case 'CHECKBOX':
      return <div></div>;
    case 'MARKDOWN':
      return <div></div>;
    case 'SWITCH':
      return <div></div>;
    case 'TEXT':
      return (
        <input
          placeholder={field.placeholder}
          type={field.type}
          name={field.name}
          id={field.id}
          // ref={register({
          //   required: 'Required',
          //   pattern: {
          //     value: /^[A-Za-z]+$/i,
          //     message: 'invalid first name',
          //   },
          // })}
        />
      );
    case 'TEXT_AREA':
      return <textarea placeholder={field.placeholder} name={field.name} id={field.id}></textarea>;
  }
};
