import React from 'react';

import { HEADING, Variant } from '@newrade/core-design-system';
import { Heading, Stack } from '@newrade/core-react-ui';
import { ColorPalette, ReversedBox } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const TextLevel: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x2]}>
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
        <Stack gap={[sizeVars.x2]}>
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
