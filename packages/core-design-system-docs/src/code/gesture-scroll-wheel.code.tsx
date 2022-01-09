import React from 'react';

import { GestureScrollWheelExample, Stack } from '@newrade/core-react-ui';

type Props = {};

export const GestureScrollWheel: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <GestureScrollWheelExample />
    </Stack>
  );
};
