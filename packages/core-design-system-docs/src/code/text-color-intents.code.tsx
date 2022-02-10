import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const TextColorIntents: React.FC<Props> = (props) => {
  return (
    <Stack>
      <ColorPalette
        colorName={'PrimaryText'}
        color={theme.colors.colorIntents.primaryText}
      ></ColorPalette>

      <ColorPalette
        colorName={'SecondaryText'}
        color={theme.colors.colorIntents.secondaryText}
      ></ColorPalette>

      <ColorPalette
        colorName={'TertiaryText'}
        color={theme.colors.colorIntents.tertiaryText}
      ></ColorPalette>
    </Stack>
  );
};
