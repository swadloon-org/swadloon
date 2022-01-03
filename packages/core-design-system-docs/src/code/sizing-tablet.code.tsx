import React from 'react';

import { ScaleSteps } from '@newrade/core-react-ui/doc-components';
import { sizingCSS } from '@newrade/core-react-ui/theme';

type Props = {};

export const SizingTablet: React.FC<Props> = (props) => {
  return <ScaleSteps steps={sizingCSS.sizes.tablet} />;
};
