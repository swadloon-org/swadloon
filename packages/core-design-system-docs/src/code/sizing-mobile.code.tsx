import React from 'react';

import { ScaleSteps } from '@newrade/core-react-ui/doc-components';
import { sizingCSS } from '@newrade/core-react-ui/theme';

type Props = {};

export const SizingMobile: React.FC<Props> = (props) => {
  return <ScaleSteps steps={sizingCSS.sizes.mobile} />;
};
