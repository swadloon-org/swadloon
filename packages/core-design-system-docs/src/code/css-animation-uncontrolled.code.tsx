import React from 'react';

import { CSSAnimation, Placeholder } from '@newrade/core-react-ui';

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
