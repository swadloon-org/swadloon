import { HEADING, Variant } from '@newrade/core-design-system';
import { ColorPalette } from '@newrade/core-gatsby-ui/src/docs-components/color-palette';
import { ReversedBox } from '@newrade/core-gatsby-ui/src/docs-components/reversed-box';
import { Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const TextLevel: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x2]}>
        <Heading variant={HEADING.h2} variantLevel={Variant.primary}>
          Primary Text
        </Heading>
        <Heading variant={HEADING.h2} variantLevel={Variant.secondary}>
          Secondary Text
        </Heading>
        <Heading variant={HEADING.h2} variantLevel={Variant.tertiary}>
          Tertiary Text
        </Heading>
      </Stack>

      <ReversedBox>
        <Stack gap={[cssTheme.sizing.var.x2]}>
          <Heading variant={HEADING.h2} variantLevel={Variant.primaryReversed}>
            Primary Text
          </Heading>
          <Heading variant={HEADING.h2} variantLevel={Variant.secondaryReversed}>
            Secondary Text
          </Heading>
          <Heading variant={HEADING.h2} variantLevel={Variant.tertiaryReversed}>
            Tertiary Text
          </Heading>
        </Stack>
      </ReversedBox>

      <ColorPalette
        colorName={''}
        colorOrPalette={{
          primaryText: theme.colors.colorIntents.primaryText,
          secondaryText: theme.colors.colorIntents.secondaryText,
          tertiaryText: theme.colors.colorIntents.tertiaryText,
          disabledText: theme.colors.colorIntents.disabledText,
          primaryReversed: theme.colors.colorIntents.primaryReversed,
        }}
      ></ColorPalette>
    </Stack>
  );
};
