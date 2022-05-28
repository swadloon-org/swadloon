import { style } from '@vanilla-extract/css';

import { sizeVars } from '../default-theme/src/theme';

export const wrapper = style({
  padding: `0 ${sizeVars.x4} ${sizeVars.x2}`,
});
