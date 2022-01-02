import React from 'react';

import { useTreatTheme } from '@newrade/core-react-ui';
import { FontMono } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const FontsMono: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontMono></FontMono>;
};
