import React from 'react';

import { HEADING, Variant } from '@newrade/core-design-system';
import { Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { ReversedBox } from '@newrade/core-react-ui/doc-components';

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
      </ReversedBox>

      <ColorPalette
        colorName={''}
        colorOrPalette={{
          primaryText: theme.colors.colorIntents.primaryText,
          secondaryText: theme.colors.colorIntents.secondaryText,
          tertiaryText: theme.colors.colorIntents.tertiaryText,
          disabledText: theme.colors.colorIntents.disabledText,
        }}
      ></ColorPalette>
    </Stack>
  );
};
