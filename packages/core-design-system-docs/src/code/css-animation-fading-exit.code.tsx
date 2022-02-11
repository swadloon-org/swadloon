import React from 'react';

import { CSSAnimation, Placeholder, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const CSSFadingExit: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
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
