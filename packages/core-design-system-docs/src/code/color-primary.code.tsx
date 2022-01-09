import React from 'react';

import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const ColorPrimary: React.FC<Props> = (props) => {
  return (
    <ColorPalette colorName={'Primary'} colorOrPalette={theme.colors.colors.primary}></ColorPalette>
  );
};
