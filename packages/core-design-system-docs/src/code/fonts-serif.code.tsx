import { FontSerif } from '@newrade/core-gatsby-ui/lib/docs-components/font-serif';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const FontsSerif: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontSerif></FontSerif>;
};
