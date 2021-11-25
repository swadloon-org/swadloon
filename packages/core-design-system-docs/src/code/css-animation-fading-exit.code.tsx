import React from 'react';

import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const CSSFadingExit: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      <CSSAnimation
        animation={{
          name: 'fadeOut',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeOutDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out Down</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeOutLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out Left</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeOutRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out Right</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeOutUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out Up</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
