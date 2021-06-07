import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
type Props = {};

export const UtilityDangerColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack>
      <ColorPalette
        colorName={'Danger Text'}
        colorOrPalette={theme.colors.colorIntents.dangerText}
      ></ColorPalette>
      <ColorPalette
        colorName={'Danger Action'}
        colorOrPalette={theme.colors.colorIntents.dangerAction}
      ></ColorPalette>
      <ColorPalette
        colorName={'Danger Background'}
        colorOrPalette={theme.colors.colorIntents.dangerBackground}
      ></ColorPalette>
    </Stack>
  );
};
