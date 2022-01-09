import React, { FormHTMLAttributes } from 'react';

import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';

type Props = PrimitiveProps & FormHTMLAttributes<any>;

export const Form = React.forwardRef<any, Props>((props, ref) => {
  return (
    <Stack ref={ref} as={'form'} gap={[sizeVars.x3]} {...props}>
      {props.children}
    </Stack>
  );
});
