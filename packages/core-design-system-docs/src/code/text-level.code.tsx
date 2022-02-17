import React from 'react';

import { HEADING, Variant } from '@newrade/core-design-system';
import { Heading, Stack } from '@newrade/core-react-ui';
import { ColorPalette, ReversedBox } from '@newrade/core-react-ui/doc-components';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

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
        color={{
          primaryText: colorVars.colorIntents.primaryText,
          secondaryText: colorVars.colorIntents.secondaryText,
          tertiaryText: colorVars.colorIntents.tertiaryText,
          disabledText: colorVars.colorIntents.disabledText,
        }}
      ></ColorPalette>
    </Stack>
  );
};
