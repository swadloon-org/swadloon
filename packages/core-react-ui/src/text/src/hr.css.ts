import { style } from '@vanilla-extract/css';

import { colorVars } from '../default-theme/src/theme';

export const wrapper = style({
  border: 'none',
  borderTop: `1px solid ${colorVars.colors.grey[100]}`,
  margin: 0,
});
