import React, { useState } from 'react';
import { useStyles } from 'react-treat';

import { FormFieldFragment } from '../../types/graphql-types';
import { FormFieldValidationFragment } from '../../types/graphql-types';

type OwnProps = {
  field: FormFieldFragment;
  validation: FormFieldValidationFragment;
};

export const Field: React.FC<OwnProps> = (props) => {
  console.log(props.validation.required);
  return (
    <div>
      <div>{props.field.name}</div>
      <div>{props.field.type}</div>
      <div>{props.validation.name}</div>
      <div>{props.validation.pattern}</div>
      <div>{props.validation.required}</div>
    </div>
  );
};
