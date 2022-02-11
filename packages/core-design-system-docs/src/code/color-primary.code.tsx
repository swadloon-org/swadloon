import React from 'react';

import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ColorPrimary: React.FC<Props> = (props) => {
  return <ColorPalette colorName={'Primary'} color={colorVars.colors.primary}></ColorPalette>;
};
