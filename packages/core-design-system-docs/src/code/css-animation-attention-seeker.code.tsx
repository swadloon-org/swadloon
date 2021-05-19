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
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceIn',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInDown',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Down</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInLeft',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Left</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInRight',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Right</Placeholder>
      </CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceInUp',
          iterationCount: 'infinity',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Up</Placeholder>
      </CSSAnimation>

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
