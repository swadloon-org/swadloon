import React from 'react';

import { Primitive } from '../primitive';
import { PrimitiveProps } from '../primitive.props';

type Props = PrimitiveProps<'form'> & {
  customProp?: string;
};

export const TestFormComponent = React.forwardRef<HTMLFormElement, Props>(
  ({ customProp, as, ...props }, ref) => {
    return <Primitive as={'form'} ref={ref} classNames={['form-class']} {...props} />;
  }
);
