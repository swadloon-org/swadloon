import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const UtilityDangerColorIntents: React.FC<Props> = (props) => {
  return (
    <Stack>
      <ColorPalette colorName={''} color={colorVars.colorIntents.dangerText}></ColorPalette>
      <ColorPalette colorName={''} color={colorVars.colorIntents.dangerAction}></ColorPalette>
      <ColorPalette colorName={''} color={colorVars.colorIntents.dangerBackground}></ColorPalette>
    </Stack>
  );
};
