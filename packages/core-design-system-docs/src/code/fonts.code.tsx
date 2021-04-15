import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { FontShowcase } from '../../../core-gatsby-ui/src/docs-components/font-showcase';

type Props = {};

export const TypoFonts: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontShowcase></FontShowcase>;
};
