import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ColorAccent: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <ColorPalette
        colorName={'Primary'}
        colorOrPalette={theme.colors.colors.accent1}
      ></ColorPalette>

      <ColorPalette
        colorName={'Primary'}
        colorOrPalette={theme.colors.colors.accent2}
      ></ColorPalette>

      <ColorPalette
        colorName={'Primary'}
        colorOrPalette={theme.colors.colors.accent3}
      ></ColorPalette>
    </Stack>
  );
};
