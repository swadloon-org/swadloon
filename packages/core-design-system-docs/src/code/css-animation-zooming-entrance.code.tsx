import { CSSAnimation, Placeholder, Stack, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const CSSZoomingEntrance: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
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
