import React from 'react';

import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
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
