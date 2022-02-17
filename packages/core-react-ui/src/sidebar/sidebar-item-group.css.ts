import { style } from '@vanilla-extract/css';

import { sizeVars } from '../theme';

export const wrapper = style({
  padding: `0 ${sizeVars.x4} ${sizeVars.x2}`,
});
