import { FontMono } from '@newrade/core-gatsby-ui/lib/docs-components/font-mono';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const FontsMono: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontMono></FontMono>;
};
