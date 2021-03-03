import { HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { ColorPalette } from '../../utils/color-palette';
import { ReversedBox } from '../../utils/reversed-box';

type Props = {};

export const TextLevel: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x2]}>
        <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.primary}>
          Primary Text
        </Heading>
        <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.secondary}>
          Secondary Text
        </Heading>
        <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.tertiary}>
          Tertiary Text
        </Heading>
      </Stack>

      <ReversedBox>
        <Stack gap={[cssTheme.sizing.var.x2]}>
          <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.primaryReversed}>
            Primary Text
          </Heading>
          <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.secondaryReversed}>
            Secondary Text
          </Heading>
          <Heading variant={HEADING.h2} variantLevel={TEXT_LEVEL.tertiaryReversed}>
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
