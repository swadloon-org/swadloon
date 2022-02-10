import React from 'react';

import { ColorPalette } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const ColorGreyscale: React.FC<Props> = (props) => {
  return <ColorPalette colorName={'Greyscale'} color={theme.colors.colors.grey}></ColorPalette>;
};
