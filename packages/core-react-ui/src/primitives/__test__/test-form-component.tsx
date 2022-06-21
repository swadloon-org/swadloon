import React from 'react';

import { Primitive } from '../primitive.js';
import { PrimitiveProps } from '../primitive.props.js';

type Props = PrimitiveProps<'form'> & {
  customProp?: string;
};

export const TestFormComponent = React.forwardRef<HTMLFormElement, Props>(
  ({ customProp, as, ...props }, ref) => {
    return <Primitive as={'form'} ref={ref} classNames={['form-class']} {...props} />;
  }
);
