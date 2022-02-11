import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const TextColorIntents: React.FC<Props> = (props) => {
  return (
    <Stack>
      <ColorPalette
        colorName={'PrimaryText'}
        color={colorVars.colorIntents.primaryText}
      ></ColorPalette>

      <ColorPalette
        colorName={'SecondaryText'}
        color={colorVars.colorIntents.secondaryText}
      ></ColorPalette>

      <ColorPalette
        colorName={'TertiaryText'}
        color={colorVars.colorIntents.tertiaryText}
      ></ColorPalette>
    </Stack>
  );
};
