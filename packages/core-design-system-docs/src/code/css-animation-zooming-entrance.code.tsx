import React from 'react';

import { CSSAnimation, Placeholder, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const CSSZoomingEntrance: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <CSSAnimation
        animation={{
          name: 'zoomIn',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom In</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom In Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom In Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom In Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom In Up</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
