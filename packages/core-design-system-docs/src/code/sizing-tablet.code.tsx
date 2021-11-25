import React from 'react';

import { ScaleSteps } from '@newrade/core-gatsby-ui/src/docs-components/scale-steps';
import { sizingCSS } from '@newrade/core-react-ui/theme';

type Props = {};

export const SizingTablet: React.FC<Props> = (props) => {
  return <ScaleSteps steps={sizingCSS.sizes.tablet} />;
};
