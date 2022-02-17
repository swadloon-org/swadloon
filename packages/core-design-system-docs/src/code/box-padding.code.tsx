import React from 'react';

import { BoxV3 } from '@newrade/core-react-ui';
import { Placeholder } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const LayoutBoxV3: React.FC<Props> = (props) => {
  return (
    <>
      <BoxV3 padding={'x2 x3 x3 x1'} style={{ border: '2px solid red' }}>
        <Placeholder></Placeholder>
      </BoxV3>
    </>
  );
};
