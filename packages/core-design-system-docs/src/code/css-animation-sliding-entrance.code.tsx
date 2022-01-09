import React from 'react';

import { CSSAnimation, Placeholder, Stack } from '@newrade/core-react-ui';

type Props = {};

export const CSSSlidingEntrance: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      <CSSAnimation
        animation={{
          name: 'slideInDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide In Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'slideInLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide In Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'slideInRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide In Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'slideInUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Slide In Up</Placeholder>
      </CSSAnimation>
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
