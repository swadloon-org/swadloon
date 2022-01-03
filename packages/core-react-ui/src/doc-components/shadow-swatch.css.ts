import { style } from '@vanilla-extract/css';

import { colorVars } from '../theme';

export const shadow = style({
  width: `100%`,
  height: `100%`,
  backgroundColor: colorVars.colors.grey[0],
});
