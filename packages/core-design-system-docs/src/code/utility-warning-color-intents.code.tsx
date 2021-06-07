import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
type Props = {};

export const UtilityWarningColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack>
      <ColorPalette
        colorName={'Warning Text'}
        colorOrPalette={theme.colors.colorIntents.warningText}
      ></ColorPalette>
      <ColorPalette
        colorName={'Warning Action '}
        colorOrPalette={theme.colors.colorIntents.warningAction}
      ></ColorPalette>
      <ColorPalette
        colorName={'Warning Background'}
        colorOrPalette={theme.colors.colorIntents.warningBackground}
      ></ColorPalette>
    </Stack>
  );
};
