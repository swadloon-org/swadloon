import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const StateColorPalette: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <ColorPalette
        colorName={''}
        color={{
          successBackground: theme.colors.colorIntents.successBackground,
          successAction: theme.colors.colorIntents.successAction,
          successText: theme.colors.colorIntents.successText,
        }}
      ></ColorPalette>

      <ColorPalette
        colorName={''}
        color={{
          warningBackground: theme.colors.colorIntents.warningBackground,
          warningAction: theme.colors.colorIntents.warningAction,
          warningText: theme.colors.colorIntents.warningText,
        }}
      ></ColorPalette>

      <ColorPalette
        colorName={''}
        color={{
          dangerBackground: theme.colors.colorIntents.dangerBackground,
          dangerAction: theme.colors.colorIntents.dangerAction,
          dangerText: theme.colors.colorIntents.dangerText,
        }}
      ></ColorPalette>
    </Stack>
  );
};
