import { Placeholder } from '@newrade/core-gatsby-ui/src/docs-components/placeholder';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';
import React from 'react';
type Props = {};

export const LayoutStack: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack gap={[sizingVars.var.x3]}>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </Stack>
    </>
  );
};
