import { CSSAnimation, Placeholder } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const CSSAnimationUncontrolled: React.FC<Props> = (props) => {
  return (
    <>
      <CSSAnimation
        animation={{
          name: 'bounce',
        }}
        showControls={true}
      >
        <Placeholder>Bounce Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceIn',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInDown',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Down Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInLeft',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Left Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInRight',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Right Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInUp',
        }}
        showControls={true}
      >
        <Placeholder>Bounce In Up Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeIn',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInDown',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Down Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInLeft',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Left Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInRight',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Right Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInUp',
        }}
        showControls={true}
      >
        <Placeholder>Fade In Up Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeOut',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out Uncontrolled</Placeholder>
      </CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'pulse',
        }}
        showControls={true}
      >
        <Placeholder>Pulse Uncontrolled</Placeholder>
      </CSSAnimation>
    </>
  );
};
