import { CSSAnimation, Placeholder } from '@newrade/core-react-ui/src';
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
    </>
  );
};
