import React, { FormHTMLAttributes } from 'react';

import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { sizeVars } from '../theme';

type Props = PrimitiveProps & FormHTMLAttributes<any>;

export const Form = React.forwardRef<any, Props>((props, ref) => {
  return (
    <Stack ref={ref} as={'form'} gap={[sizeVars.x3]} {...props}>
      {props.children}
    </Stack>
  );
});
