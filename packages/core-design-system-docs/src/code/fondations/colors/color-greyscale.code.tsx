import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { ColorPalette } from '../../../utils/color-palette';

type Props = {};

export const ColorGreyscale: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <ColorPalette colorName={'Greyscale'} colorOrPalette={theme.colors.colors.grey}></ColorPalette>;
};
