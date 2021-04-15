import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Placeholder } from '../utils/placeholder';
type Props = {};

export const LayoutStack: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack gap={[cssTheme.sizing.var.x3]}>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </Stack>
    </>
  );
};
