import { style } from '@vanilla-extract/css';

import { colorVars } from '@newrade/core-react-ui/theme';

export const footer = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: colorVars.colorIntents.elevation2Grey,
});
