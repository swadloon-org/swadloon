import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ColorAccent: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x5]}>
      <ColorPalette colorName={'Accent1'} color={colorVars.colors.accent1}></ColorPalette>

      <ColorPalette colorName={'Accent2'} color={colorVars.colors.accent2}></ColorPalette>

      <ColorPalette colorName={'Accent3'} color={colorVars.colors.accent3}></ColorPalette>

      <ColorPalette colorName={'Accent4'} color={colorVars.colors.accent4}></ColorPalette>

      <ColorPalette colorName={'Accent5'} color={colorVars.colors.accent5}></ColorPalette>

      <ColorPalette colorName={'Accent6'} color={colorVars.colors.accent6}></ColorPalette>
    </Stack>
  );
};
