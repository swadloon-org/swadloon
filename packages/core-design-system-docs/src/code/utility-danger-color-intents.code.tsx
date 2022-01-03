import React from 'react';

import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
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
