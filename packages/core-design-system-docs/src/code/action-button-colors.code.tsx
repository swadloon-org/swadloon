import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Button, Stack } from '@newrade/core-react-ui';
import { ColorPalette, ReversedBox } from '@newrade/core-react-ui/doc-components';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

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
            primary: colorVars.colorIntents.primary,
          }}
        ></ColorPalette>
        <ColorPalette
          colorName={''}
          color={{
            secondary: colorVars.colorIntents.secondary,
          }}
        ></ColorPalette>
      </Stack>
    </Stack>
  );
};
