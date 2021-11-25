import React from 'react';

import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const CSSZoomingExit: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      <CSSAnimation
        animation={{
          name: 'zoomOut',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom Out</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom Out Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom Out Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom Out Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Zoom Out Up</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
