import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';
type Props = {};

export const TextColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack>
      <ColorPalette
        colorName={'PrimaryText'}
        colorOrPalette={theme.colors.colorIntents.primaryText}
      ></ColorPalette>

      <ColorPalette
        colorName={'SecondaryText'}
        colorOrPalette={theme.colors.colorIntents.secondaryText}
      ></ColorPalette>

      <ColorPalette
        colorName={'TertiaryText'}
        colorOrPalette={theme.colors.colorIntents.tertiaryText}
      ></ColorPalette>
    </Stack>
  );
};
