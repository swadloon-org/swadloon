import React from 'react';

import { FontMono } from '@newrade/core-gatsby-ui/src/docs-components/font-mono';
import { useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const FontsMono: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontMono></FontMono>;
};
