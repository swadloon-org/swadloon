import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
type Props = {};

export const UtilitySuccessColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack>
      <Stack>
        <ColorPalette
          colorName={'Success Text'}
          colorOrPalette={theme.colors.colorIntents.successText}
        ></ColorPalette>
        <ColorPalette
          colorName={'Success Action'}
          colorOrPalette={theme.colors.colorIntents.successAction}
        ></ColorPalette>
        <ColorPalette
          colorName={'Success Background'}
          colorOrPalette={theme.colors.colorIntents.successBackground}
        ></ColorPalette>
      </Stack>
    </Stack>
  );
};
