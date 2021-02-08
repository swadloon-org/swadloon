import React, { FormHTMLAttributes } from 'react';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import { CommonComponentProps } from '../props/component-common.props';

type Props = CommonComponentProps & FormHTMLAttributes<any>;

export const Form = React.forwardRef<any, Props>((props, ref) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Stack ref={ref} as={'form'} gap={[cssTheme.sizing.var.x3]} {...props}>
      {props.children}
    </Stack>
  );
});
