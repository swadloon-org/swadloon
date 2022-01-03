import React from 'react';

import { useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const ColorGreyscale: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <ColorPalette colorName={'Greyscale'} colorOrPalette={theme.colors.colors.grey}></ColorPalette>
  );
};
