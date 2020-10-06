import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { useForm } from 'react-hook-form';

import { FormFragment } from '../../types/graphql-types';
import { Field } from './field';

type OwnProps = {
  form: FormFragment;
};

export const Form: React.FC<OwnProps> = ({ form }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="wrapper">
      <h1>{form.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {form.formFields.map((field, i) => {
          return <Field key={i}>test</Field>;
        })}
        <input type="submit" />
      </form>
    </div>
  );
};
