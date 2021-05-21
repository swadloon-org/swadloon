import { Variant } from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  CSSAnimation,
  CSSAnimationHandle,
  CSSAnimationState,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React, { useRef, useState } from 'react';

type Props = {};

export const CSSAnimationControlled: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const [animationState, setAnimationState] = useState<CSSAnimationState>('paused');

  const bounceRef = useRef<CSSAnimationHandle>(null);
  const bounceInRef = useRef<CSSAnimationHandle>(null);
  const bounceInDownRef = useRef<CSSAnimationHandle>(null);
  const bounceInLeftRef = useRef<CSSAnimationHandle>(null);
  const bounceInRightRef = useRef<CSSAnimationHandle>(null);
  const bounceInUpRef = useRef<CSSAnimationHandle>(null);
  const fadeInRef = useRef<CSSAnimationHandle>(null);
  const fadeInDownRef = useRef<CSSAnimationHandle>(null);
  const fadeInLeftRef = useRef<CSSAnimationHandle>(null);
  const fadeInRightRef = useRef<CSSAnimationHandle>(null);
  const fadeInUpRef = useRef<CSSAnimationHandle>(null);
  const fadeOutRef = useRef<CSSAnimationHandle>(null);
  const pulseRef = useRef<CSSAnimationHandle>(null);

  function handlePlayPause(event: React.MouseEvent<any>) {
    setAnimationState(animationState === 'paused' ? 'running' : 'paused');
  }

  function handleReset(event: React.MouseEvent<any>) {
    bounceRef.current?.reset();
    bounceInRef.current?.reset();
    bounceInDownRef.current?.reset();
    bounceInLeftRef.current?.reset();
    bounceInRightRef.current?.reset();
    bounceInUpRef.current?.reset();
    fadeInRef.current?.reset();
    fadeInDownRef.current?.reset();
    fadeInLeftRef.current?.reset();
    fadeInRightRef.current?.reset();
    fadeInUpRef.current?.reset();
    fadeOutRef.current?.reset();
    pulseRef.current?.reset();
    setAnimationState('paused');
  }

  return (
    <Stack gap={[cssTheme.sizing.var.x2]}>
      <Cluster justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x1]}>
        <Button style={{ width: 100 }} onClick={handlePlayPause}>
          {animationState === 'paused' ? 'Play' : 'Pause'}
        </Button>
        <Button style={{ width: 100 }} variant={Variant.secondary} onClick={handleReset}>
          Reset
        </Button>
      </Cluster>
      <CSSAnimation
        animation={{
          name: 'bounce',
          playState: animationState,
        }}
        ref={bounceRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceIn',
          playState: animationState,
        }}
        ref={bounceInRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInDown',
          playState: animationState,
        }}
        ref={bounceInDownRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInLeft',
          playState: animationState,
        }}
        ref={bounceInLeftRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInRight',
          playState: animationState,
        }}
        ref={bounceInRightRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'bounceInUp',
          playState: animationState,
        }}
        ref={bounceInUpRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeIn',
          playState: animationState,
        }}
        ref={fadeInRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInDown',
          playState: animationState,
        }}
        ref={fadeInDownRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInLeft',
          playState: animationState,
        }}
        ref={fadeInLeftRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInRight',
          playState: animationState,
        }}
        ref={fadeInRightRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeInUp',
          playState: animationState,
        }}
        ref={fadeInUpRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'fadeOut',
          playState: animationState,
        }}
        ref={fadeOutRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'pulse',
          playState: animationState,
        }}
        ref={pulseRef}
      ></CSSAnimation>
    </Stack>
  );
};
