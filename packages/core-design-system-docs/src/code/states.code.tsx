import React from 'react';

import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const StateColorPalette: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <ColorPalette
        colorName={''}
        colorOrPalette={{
          successBackground: theme.colors.colorIntents.successBackground,
          successAction: theme.colors.colorIntents.successAction,
          successText: theme.colors.colorIntents.successText,
        }}
      ></ColorPalette>

      <ColorPalette
        colorName={''}
        colorOrPalette={{
          warningBackground: theme.colors.colorIntents.warningBackground,
          warningAction: theme.colors.colorIntents.warningAction,
          warningText: theme.colors.colorIntents.warningText,
        }}
      ></ColorPalette>

      <ColorPalette
        colorName={''}
        colorOrPalette={{
          dangerBackground: theme.colors.colorIntents.dangerBackground,
          dangerAction: theme.colors.colorIntents.dangerAction,
          dangerText: theme.colors.colorIntents.dangerText,
        }}
      ></ColorPalette>
    </Stack>
  );
};
