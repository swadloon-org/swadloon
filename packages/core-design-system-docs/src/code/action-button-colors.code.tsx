import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { ReversedBox } from '@newrade/core-gatsby-ui/src/docs-components/reversed-box';
import { Button, Stack, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const ButtonColors: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x3]}>
        <Button variant={Variant.primary}></Button>
        <Button variant={Variant.secondary}></Button>
        <Button variant={Variant.tertiary}></Button>
      </Stack>

      <ReversedBox>
        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Button variant={Variant.primaryReversed}></Button>
          <Button variant={Variant.secondaryReversed}></Button>
          <Button variant={Variant.tertiaryReversed}></Button>
        </Stack>
      </ReversedBox>

      <Stack>
        <ColorPalette
          colorName={''}
          colorOrPalette={{
            primary: theme.colors.colorIntents.primary,
          }}
        ></ColorPalette>
        <ColorPalette
          colorName={''}
          colorOrPalette={{
            secondary: theme.colors.colorIntents.secondary,
          }}
        ></ColorPalette>
        <ColorPalette
          colorName={''}
          colorOrPalette={{
            primaryReversed: theme.colors.colorIntents.primaryReversed,
          }}
        ></ColorPalette>
      </Stack>
    </Stack>
  );
};
