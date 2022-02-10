import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const ColorUtility: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <ColorPalette
        colorName={'Utility Blue'}
        color={theme.colors.colors.utilityNeutral}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Green'}
        color={theme.colors.colors.utilityGreen}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Yellow'}
        color={theme.colors.colors.utilityYellow}
      ></ColorPalette>
      <ColorPalette colorName={'Utility Red'} color={theme.colors.colors.utilityRed}></ColorPalette>
    </Stack>
  );
};
