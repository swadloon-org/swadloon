import React from 'react';

import { GestureScrollWheelExample, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const GestureScrollWheel: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <GestureScrollWheelExample />
    </Stack>
  );
};
