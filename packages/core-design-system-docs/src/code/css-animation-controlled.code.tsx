import React, { useRef, useState } from 'react';

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

type Props = {};

export const CSSAnimationControlled: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  const [animationState, setAnimationState] = useState<CSSAnimationState>('paused');

  const bounceRef = useRef<CSSAnimationHandle>(null);

  function handlePlayPause(event: React.MouseEvent<any>) {
    setAnimationState(animationState === 'paused' ? 'running' : 'paused');
  }

  function handleReset(event: React.MouseEvent<any>) {
    bounceRef.current?.reset();
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
      >
        <Placeholder>Bounce Controlled</Placeholder>
      </CSSAnimation>
    </Stack>
  );
};
