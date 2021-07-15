import { FontSansAlternate } from '@newrade/core-gatsby-ui/src/docs-components/font-sans-alternate';
import { useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const FontsSansAlternate: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontSansAlternate></FontSansAlternate>;
};
