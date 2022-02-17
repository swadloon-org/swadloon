import React from 'react';

import { CSSAnimation, Placeholder, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const CSSFadingEntrance: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
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
