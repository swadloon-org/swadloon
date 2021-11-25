import React from 'react';

import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const CSSBouncingEntrance: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
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
