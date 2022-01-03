import React from 'react';

import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const ColorUtility: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <ColorPalette
        colorName={'Utility Blue'}
        colorOrPalette={theme.colors.colors.utilityNeutral}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Green'}
        colorOrPalette={theme.colors.colors.utilityGreen}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Yellow'}
        colorOrPalette={theme.colors.colors.utilityYellow}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Red'}
        colorOrPalette={theme.colors.colors.utilityRed}
      ></ColorPalette>
    </Stack>
  );
};
