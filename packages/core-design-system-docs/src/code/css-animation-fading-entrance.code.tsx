import React from 'react';

import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const CSSFadingEntrance: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      <CSSAnimation
        animation={{
          name: 'fadeIn',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade In</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeInDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeInLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeInRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeInUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Up</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
