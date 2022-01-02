import React from 'react';

import { useTreatTheme } from '@newrade/core-react-ui';
import { FontShowcase } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const Fonts: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontShowcase></FontShowcase>;
};
