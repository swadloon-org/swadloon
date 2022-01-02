import React from 'react';

import { useTreatTheme } from '@newrade/core-react-ui';
import { FontSerif } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const FontsSerif: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontSerif></FontSerif>;
};
