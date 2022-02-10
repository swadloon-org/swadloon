import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const ColorAccent: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <ColorPalette colorName={'Accent1'} color={theme.colors.colors.accent1}></ColorPalette>

      <ColorPalette colorName={'Accent2'} color={theme.colors.colors.accent2}></ColorPalette>

      <ColorPalette colorName={'Accent3'} color={theme.colors.colors.accent3}></ColorPalette>

      <ColorPalette colorName={'Accent4'} color={theme.colors.colors.accent4}></ColorPalette>

      <ColorPalette colorName={'Accent5'} color={theme.colors.colors.accent5}></ColorPalette>

      <ColorPalette colorName={'Accent6'} color={theme.colors.colors.accent6}></ColorPalette>
    </Stack>
  );
};
