import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const CSSAnimationAttentionSeeker: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
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
