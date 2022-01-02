import React from 'react';

import { useTreatTheme } from '@newrade/core-react-ui';
import { FontSansAlternate } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const FontsSansAlternate: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontSansAlternate></FontSansAlternate>;
};
