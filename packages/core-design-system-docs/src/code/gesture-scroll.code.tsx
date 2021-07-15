import { GestureScrollExample, Stack, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const GestureScroll: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <GestureScrollExample />
    </Stack>
  );
};
