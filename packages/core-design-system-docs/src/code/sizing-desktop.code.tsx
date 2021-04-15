import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { ScaleSteps } from '../../../core-gatsby-ui/src/docs-components/scale-steps';

type Props = {};

export const SizingDesktop: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <ScaleSteps steps={theme.sizing.sizes.desktop} />;
};
