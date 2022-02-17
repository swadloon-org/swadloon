import React from 'react';

import { CSSAnimation, Placeholder, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const CSSBouncingEntrance: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <CSSAnimation
        animation={{
          name: 'bounceIn',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Up</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
