import { ColorPalette } from '@newrade/core-gatsby-ui/lib/docs-components/color-palette';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ColorPrimary: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.primary}></ColorPalette>
  );
};
