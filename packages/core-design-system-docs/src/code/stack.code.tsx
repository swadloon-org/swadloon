import { Placeholder } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
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
