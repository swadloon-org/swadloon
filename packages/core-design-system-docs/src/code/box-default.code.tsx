import { Placeholder } from '@newrade/core-gatsby-ui/src/docs-components/placeholder';
import { BoxV2, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

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
