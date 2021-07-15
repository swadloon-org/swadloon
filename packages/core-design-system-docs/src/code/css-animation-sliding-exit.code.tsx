import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const CSSSlidingExit: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      <CSSAnimation
        animation={{
          name: 'slideOutDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide Out Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'slideOutLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide Out Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'slideOutRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide Out Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'slideOutUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide Out Up</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
