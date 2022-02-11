import React from 'react';

import { CSSAnimation, Placeholder, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const CSSAnimationAttentionSeeker: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <CSSAnimation
        animation={{
          name: 'bounce',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'pulse',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Pulse</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
