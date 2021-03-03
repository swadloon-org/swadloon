import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { ColorPalette } from '../../../utils/color-palette';

type Props = {};

export const ColorPrimary: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.primary}></ColorPalette>;
};
