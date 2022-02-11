import React from 'react';

import { BoxV2, useTreatTheme } from '@newrade/core-react-ui';
import { Placeholder } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const LayoutBoxV2: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <BoxV2 padding={[cssTheme.sizing.var.x4]} style={{ border: '2px solid red' }}>
        <Placeholder></Placeholder>
      </BoxV2>
    </>
  );
};
