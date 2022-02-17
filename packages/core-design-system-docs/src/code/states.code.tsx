import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const StateColorPalette: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <ColorPalette
        colorName={''}
        color={{
          successBackground: colorVars.colorIntents.successBackground,
          successAction: colorVars.colorIntents.successAction,
          successText: colorVars.colorIntents.successText,
        }}
      ></ColorPalette>

      <ColorPalette
        colorName={''}
        color={{
          warningBackground: colorVars.colorIntents.warningBackground,
          warningAction: colorVars.colorIntents.warningAction,
          warningText: colorVars.colorIntents.warningText,
        }}
      ></ColorPalette>

      <ColorPalette
        colorName={''}
        color={{
          dangerBackground: colorVars.colorIntents.dangerBackground,
          dangerAction: colorVars.colorIntents.dangerAction,
          dangerText: colorVars.colorIntents.dangerText,
        }}
      ></ColorPalette>
    </Stack>
  );
};
