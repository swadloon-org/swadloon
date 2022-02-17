import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const UtilityWarningColorIntents: React.FC<Props> = (props) => {
  return (
    <Stack>
      <ColorPalette colorName={''} color={colorVars.colorIntents.warningText}></ColorPalette>
      <ColorPalette colorName={''} color={colorVars.colorIntents.warningAction}></ColorPalette>
      <ColorPalette colorName={''} color={colorVars.colorIntents.warningBackground}></ColorPalette>
    </Stack>
  );
};
