import { BoxV2, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Placeholder } from '../../../utils/placeholder';
type Props = {};

export const LayoutBoxV2: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <BoxV2 padding={[cssTheme.sizing.var.x4]} style={{ border: '2px solid red' }}>
        <Placeholder></Placeholder>
      </BoxV2>
    </CodeOutline>
  );
};
