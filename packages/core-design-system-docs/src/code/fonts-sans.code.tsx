import React from 'react';

import { FontSans } from '@newrade/core-gatsby-ui/src/docs-components/font-sans';
import { useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const FontsSans: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontSans></FontSans>;
};
