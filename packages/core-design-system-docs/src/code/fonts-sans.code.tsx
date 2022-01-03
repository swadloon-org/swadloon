import React from 'react';

import { useTreatTheme } from '@newrade/core-react-ui';
import { FontSans } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const FontsSans: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontSans></FontSans>;
};
