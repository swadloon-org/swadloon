import { Placeholder } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder';
import { BoxV3, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const LayoutBoxV3: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <BoxV3 padding={'x2 x3 x3 x1'} style={{ border: '2px solid red' }}>
        <Placeholder></Placeholder>
      </BoxV3>
    </>
  );
};
