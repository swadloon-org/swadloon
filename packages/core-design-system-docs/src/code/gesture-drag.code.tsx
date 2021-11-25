import React from 'react';

import { GestureDragExample, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const GestureDrag: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <GestureDragExample />
    </Stack>
  );
};
