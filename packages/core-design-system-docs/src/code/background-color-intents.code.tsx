import React from 'react';

import { BoxV2, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const BackgroundColorIntents: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <BoxV2
        padding={[cssTheme.sizing.var.x2]}
        style={{ backgroundColor: cssTheme.colors.colorIntents.background1, width: `100%` }}
      >
        <BoxV2
          padding={[cssTheme.sizing.var.x2]}
          style={{ backgroundColor: cssTheme.colors.colorIntents.background1, width: `100%` }}
        ></BoxV2>
      </BoxV2>

      <ColorPalette
        colorName={''}
        colorOrPalette={{
          background0: theme.colors.colorIntents.background0,
          background1: theme.colors.colorIntents.background1,
          background2: theme.colors.colorIntents.background2,
          backgroundDisabled: theme.colors.colorIntents.backgroundDisabled,
        }}
      ></ColorPalette>
    </Stack>
  );
};
