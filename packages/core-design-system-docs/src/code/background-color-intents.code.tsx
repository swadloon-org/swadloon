import React from 'react';

import { BoxV2, Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const BackgroundColorIntents: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <BoxV2
        padding={[sizeVars.x2]}
        style={{ backgroundColor: colorVars.colorIntents.background1, width: `100%` }}
      >
        <BoxV2
          padding={[sizeVars.x2]}
          style={{ backgroundColor: colorVars.colorIntents.background1, width: `100%` }}
        ></BoxV2>
      </BoxV2>

      {/* <ColorPalette
        colorName={''}
        colorOrPalette={{
          background0: colorVars.colorIntents.background0,
          background1: colorVars.colorIntents.background1,
          background2: colorVars.colorIntents.background2,
          backgroundDisabled: colorVars.colorIntents.backgroundDisabled,
        }}
      ></ColorPalette> */}
    </Stack>
  );
};
