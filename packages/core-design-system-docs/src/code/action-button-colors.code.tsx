import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Button, Stack } from '@newrade/core-react-ui';
import { ColorPalette, ReversedBox } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const ButtonColors: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x3]}>
        <Button variant={Variant.primary}></Button>
        <Button variant={Variant.secondary}></Button>
        <Button variant={Variant.tertiary}></Button>
      </Stack>

      <ReversedBox>
        <Stack gap={[sizeVars.x3]}>
          <Button variant={Variant.primary}></Button>
          <Button variant={Variant.secondary}></Button>
          <Button variant={Variant.tertiary}></Button>
        </Stack>
      </ReversedBox>

      <Stack>
        <ColorPalette
          colorName={''}
          color={{
            primary: theme.colors.colorIntents.primary,
          }}
        ></ColorPalette>
        <ColorPalette
          colorName={''}
          color={{
            secondary: theme.colors.colorIntents.secondary,
          }}
        ></ColorPalette>
      </Stack>
    </Stack>
  );
};
