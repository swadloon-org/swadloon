import { ScaleSteps } from '@newrade/core-gatsby-ui/src/docs-components/scale-steps';
import { useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const SizingMobile: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <ScaleSteps steps={theme.sizing.sizes.mobile} />;
};
