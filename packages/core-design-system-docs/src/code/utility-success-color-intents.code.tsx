import { ColorPalette } from '@newrade/core-gatsby-ui/lib/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
type Props = {};

export const UtilitySuccessColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          successText: theme.colors.colorIntents.successText,
        }}
      ></ColorPalette>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          successAction: theme.colors.colorIntents.successAction,
        }}
      ></ColorPalette>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          successBackground: theme.colors.colorIntents.successBackground,
        }}
      ></ColorPalette>
    </Stack>
  );
};
