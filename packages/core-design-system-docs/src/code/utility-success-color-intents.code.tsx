import React from 'react';

import { Stack } from '@newrade/core-react-ui';
import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const UtilitySuccessColorIntents: React.FC<Props> = (props) => {
  return (
    <Stack>
      <ColorPalette colorName={''} color={colorVars.colorIntents.successText}></ColorPalette>
      <ColorPalette colorName={''} color={colorVars.colorIntents.successAction}></ColorPalette>
      <ColorPalette colorName={''} color={colorVars.colorIntents.successBackground}></ColorPalette>
    </Stack>
  );
};
