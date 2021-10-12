import { ScaleSteps } from '@newrade/core-gatsby-ui/src/docs-components/scale-steps';
import { sizingCSS } from '@newrade/core-react-ui/theme';
import React from 'react';

type Props = {};

export const SizingDesktop: React.FC<Props> = (props) => {
  return <ScaleSteps steps={sizingCSS.sizes.desktop} />;
};
