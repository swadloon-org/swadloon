import React from 'react';

import { BoxV2 } from '@newrade/core-react-ui';
import { Placeholder } from '@newrade/core-react-ui/doc-components';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const LayoutBoxV2: React.FC<Props> = (props) => {
  return (
    <>
      <BoxV2 padding={[sizeVars.x4]} style={{ border: '2px solid red' }}>
        <Placeholder></Placeholder>
      </BoxV2>
    </>
  );
};
