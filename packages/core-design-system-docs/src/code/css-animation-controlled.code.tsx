import { Variant } from '@newrade/core-design-system';
import {
  Button,
  Cluster,
  CSSAnimation,
  CSSAnimationHandle,
  CSSAnimationState,
  Placeholder,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React, { useRef, useState } from 'react';

type Props = {};

export const CSSAnimationControlled: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const [animationState, setAnimationState] = useState<CSSAnimationState>('paused');

  const fadeOutRef = useRef<CSSAnimationHandle>(null);

  function handlePlayPause(event: React.MouseEvent<any>) {
    setAnimationState(animationState === 'paused' ? 'running' : 'paused');
  }

  function handleReset(event: React.MouseEvent<any>) {
    fadeOutRef.current?.reset();
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
          name: 'fadeOut',
          playState: animationState,
        }}
        ref={fadeOutRef}
      >
        <Placeholder>Fade Out Controlled</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
