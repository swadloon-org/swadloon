import React from 'react';

import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
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
