import React from 'react';

import { ColorPalette } from '@newrade/core-react-ui/doc-components';
import { colorVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ColorGreyscale: React.FC<Props> = (props) => {
  return <ColorPalette colorName={'Greyscale'} color={colorVars.colors.grey}></ColorPalette>;
};
