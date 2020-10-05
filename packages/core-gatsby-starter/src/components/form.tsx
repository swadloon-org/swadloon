import React, { useState } from 'react';
import { useStyles } from 'react-treat';

import { FormFragment } from '../../types/graphql-types';
import { Field } from './fields';

type OwnProps = {
  form: FormFragment;
};

export const Form: React.FC<OwnProps> = (props) => {
  return (
    <div>
      <Field field={props.form.formFields[1]} validation={props.form.formFields[1]}></Field>
    </div>
  );
};
