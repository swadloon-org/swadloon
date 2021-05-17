import { CSSAnimation, Placeholder } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const CSSAnimationUncontrolled: React.FC<Props> = (props) => {
  return (
    <>
      <CSSAnimation
        animation={{
          name: 'fadeOut',
        }}
        showControls={true}
      >
        <Placeholder>Fade Out Uncontrolled</Placeholder>
      </CSSAnimation>
    </>
  );
};
