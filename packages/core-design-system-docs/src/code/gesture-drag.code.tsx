import { GestureDragExample, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const GestureDrag: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <GestureDragExample />
    </Stack>
  );
};
