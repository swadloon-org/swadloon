import React from 'react';

import { GestureDragExample, Stack } from '@newrade/core-react-ui';

type Props = {};

export const GestureDrag: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <GestureDragExample />
    </Stack>
  );
};
