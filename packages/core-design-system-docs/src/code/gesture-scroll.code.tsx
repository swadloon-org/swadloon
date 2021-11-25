import React from 'react';

import { GestureScrollExample, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const GestureScroll: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <GestureScrollExample />
    </Stack>
  );
};
