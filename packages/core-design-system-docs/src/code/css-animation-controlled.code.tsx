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
  const pulseRef = useRef<CSSAnimationHandle>(null);
  const bounceInRef = useRef<CSSAnimationHandle>(null);
  const bounceInDownRef = useRef<CSSAnimationHandle>(null);
  const bounceInLeftRef = useRef<CSSAnimationHandle>(null);
  const bounceInRightRef = useRef<CSSAnimationHandle>(null);
  const bounceInUpRef = useRef<CSSAnimationHandle>(null);
  const bounceOutRef = useRef<CSSAnimationHandle>(null);
  const bounceOutDownRef = useRef<CSSAnimationHandle>(null);
  const bounceOutLeftRef = useRef<CSSAnimationHandle>(null);
  const bounceOutRightRef = useRef<CSSAnimationHandle>(null);
  const bounceOutUpRef = useRef<CSSAnimationHandle>(null);
  const fadeInRef = useRef<CSSAnimationHandle>(null);
  const fadeInDownRef = useRef<CSSAnimationHandle>(null);
  const fadeInLeftRef = useRef<CSSAnimationHandle>(null);
  const fadeInRightRef = useRef<CSSAnimationHandle>(null);
  const fadeInUpRef = useRef<CSSAnimationHandle>(null);
  const fadeOutRef = useRef<CSSAnimationHandle>(null);
  const fadeOutDownRef = useRef<CSSAnimationHandle>(null);
  const fadeOutLeftRef = useRef<CSSAnimationHandle>(null);
  const fadeOutRightRef = useRef<CSSAnimationHandle>(null);
  const fadeOutUpRef = useRef<CSSAnimationHandle>(null);
  const zoomInRef = useRef<CSSAnimationHandle>(null);
  const zoomInDownRef = useRef<CSSAnimationHandle>(null);
  const zoomInLeftRef = useRef<CSSAnimationHandle>(null);
  const zoomInRightRef = useRef<CSSAnimationHandle>(null);
  const zoomInUpRef = useRef<CSSAnimationHandle>(null);
  const zoomOutRef = useRef<CSSAnimationHandle>(null);
  const zoomOutDownRef = useRef<CSSAnimationHandle>(null);
  const zoomOutLeftRef = useRef<CSSAnimationHandle>(null);
  const zoomOutRightRef = useRef<CSSAnimationHandle>(null);
  const zoomOutUpRef = useRef<CSSAnimationHandle>(null);
  const slideInDownRef = useRef<CSSAnimationHandle>(null);
  const slideInLeftRef = useRef<CSSAnimationHandle>(null);
  const slideInRightRef = useRef<CSSAnimationHandle>(null);
  const slideInUpRef = useRef<CSSAnimationHandle>(null);
  const slideOutDownRef = useRef<CSSAnimationHandle>(null);
  const slideOutLeftRef = useRef<CSSAnimationHandle>(null);
  const slideOutRightRef = useRef<CSSAnimationHandle>(null);
  const slideOutUpRef = useRef<CSSAnimationHandle>(null);

  function handlePlayPause(event: React.MouseEvent<any>) {
    setAnimationState(animationState === 'paused' ? 'running' : 'paused');
  }

  function handleReset(event: React.MouseEvent<any>) {
    bounceRef.current?.reset();
    pulseRef.current?.reset();
    bounceInRef.current?.reset();
    bounceInDownRef.current?.reset();
    bounceInLeftRef.current?.reset();
    bounceInRightRef.current?.reset();
    bounceInUpRef.current?.reset();
    bounceOutRef.current?.reset();
    bounceOutDownRef.current?.reset();
    bounceOutLeftRef.current?.reset();
    bounceOutRightRef.current?.reset();
    bounceOutUpRef.current?.reset();
    fadeInRef.current?.reset();
    fadeInDownRef.current?.reset();
    fadeInLeftRef.current?.reset();
    fadeInRightRef.current?.reset();
    fadeInUpRef.current?.reset();
    fadeOutRef.current?.reset();
    fadeOutDownRef.current?.reset();
    fadeOutLeftRef.current?.reset();
    fadeOutRightRef.current?.reset();
    zoomInRef.current?.reset();
    zoomInDownRef.current?.reset();
    zoomInLeftRef.current?.reset();
    zoomInRightRef.current?.reset();
    zoomInUpRef.current?.reset();
    zoomOutRef.current?.reset();
    zoomOutDownRef.current?.reset();
    zoomOutLeftRef.current?.reset();
    zoomOutRightRef.current?.reset();
    zoomOutUpRef.current?.reset();
    slideInDownRef.current?.reset();
    slideInLeftRef.current?.reset();
    slideInRightRef.current?.reset();
    slideInUpRef.current?.reset();
    slideOutDownRef.current?.reset();
    slideOutLeftRef.current?.reset();
    slideOutRightRef.current?.reset();
    slideOutUpRef.current?.reset();
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
          name: 'pulse',
          playState: animationState,
        }}
        ref={pulseRef}
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
          name: 'bounceOut',
          playState: animationState,
        }}
        ref={bounceOutRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutDown',
          playState: animationState,
        }}
        ref={bounceOutDownRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutLeft',
          playState: animationState,
        }}
        ref={bounceOutLeftRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutRight',
          playState: animationState,
        }}
        ref={bounceOutRightRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'bounceOutUp',
          playState: animationState,
        }}
        ref={bounceOutUpRef}
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
          name: 'fadeOutDown',
          playState: animationState,
        }}
        ref={fadeOutDownRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeOutLeft',
          playState: animationState,
        }}
        ref={fadeOutLeftRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeInRight',
          playState: animationState,
        }}
        ref={fadeOutRightRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'fadeOutUp',
          playState: animationState,
        }}
        ref={fadeOutUpRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomIn',
          playState: animationState,
        }}
        ref={zoomInRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInDown',
          playState: animationState,
        }}
        ref={zoomInDownRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInLeft',
          playState: animationState,
        }}
        ref={zoomInLeftRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInRight',
          playState: animationState,
        }}
        ref={zoomInRightRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomInUp',
          playState: animationState,
        }}
        ref={zoomInUpRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'zoomOut',
          playState: animationState,
        }}
        ref={zoomOutRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutDown',
          playState: animationState,
        }}
        ref={zoomOutDownRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutLeft',
          playState: animationState,
        }}
        ref={zoomOutLeftRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutRight',
          playState: animationState,
        }}
        ref={zoomOutRightRef}
      ></CSSAnimation>

      <CSSAnimation
        animation={{
          name: 'zoomOutUp',
          playState: animationState,
        }}
        ref={zoomOutUpRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideInDown',
          playState: animationState,
        }}
        ref={slideInDownRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideInLeft',
          playState: animationState,
        }}
        ref={slideInLeftRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideInRight',
          playState: animationState,
        }}
        ref={slideInRightRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideInUp',
          playState: animationState,
        }}
        ref={slideInUpRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideOutDown',
          playState: animationState,
        }}
        ref={slideOutDownRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideOutLeft',
          playState: animationState,
        }}
        ref={slideOutLeftRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideOutRight',
          playState: animationState,
        }}
        ref={slideOutRightRef}
      ></CSSAnimation>
      <CSSAnimation
        animation={{
          name: 'slideOutUp',
          playState: animationState,
        }}
        ref={slideOutUpRef}
      ></CSSAnimation>
    </Stack>
  );
};
