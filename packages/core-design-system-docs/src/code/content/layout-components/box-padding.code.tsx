import { BoxV3, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Placeholder } from '../../../utils/placeholder';
type Props = {};

export const LayoutBoxV3: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <BoxV3 padding={'x2 x3 x3 x1'} style={{ border: '2px solid red' }}>
        <Placeholder></Placeholder>
      </BoxV3>
    </CodeOutline>
  );
};
