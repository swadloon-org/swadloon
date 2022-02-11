import React from 'react';

import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { Placeholder } from '@newrade/core-react-ui/doc-components';
import { sizeVars } from '@newrade/core-react-ui/theme';
type Props = {};

export const LayoutStack: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack gap={[sizeVars.x3]}>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </Stack>
    </>
  );
};
