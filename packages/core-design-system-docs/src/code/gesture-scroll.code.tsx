import React from 'react';

import { GestureScrollExample, Stack } from '@newrade/core-react-ui';

type Props = {};

export const GestureScroll: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <GestureScrollExample />
    </Stack>
  );
};
