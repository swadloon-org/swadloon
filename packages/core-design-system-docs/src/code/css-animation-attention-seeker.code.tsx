import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const CSSAnimationAttentionSeeker: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      <CSSAnimation
        animation={{
          name: 'bounce',
          duration: 1200,
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeOut',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
