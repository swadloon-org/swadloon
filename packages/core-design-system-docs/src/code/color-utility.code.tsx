import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ColorUtility: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <ColorPalette
        colorName={'Utility Blue'}
        color={colorVars.colors.utilityNeutral}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Green'}
        color={colorVars.colors.utilityGreen}
      ></ColorPalette>
      <ColorPalette
        colorName={'Utility Yellow'}
        color={colorVars.colors.utilityYellow}
      ></ColorPalette>
      <ColorPalette colorName={'Utility Red'} color={colorVars.colors.utilityRed}></ColorPalette>
    </Stack>
  );
};
