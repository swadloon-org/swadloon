import { ColorPalette } from '@newrade/core-gatsby-ui/lib/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
type Props = {};

export const UtilityDangerColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          dangerText: theme.colors.colorIntents.dangerText,
        }}
      ></ColorPalette>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          dangerWarning: theme.colors.colorIntents.dangerAction,
        }}
      ></ColorPalette>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          dangerBackground: theme.colors.colorIntents.dangerBackground,
        }}
      ></ColorPalette>
    </Stack>
  );
};
