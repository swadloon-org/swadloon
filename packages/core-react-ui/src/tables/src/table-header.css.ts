import { style } from '@vanilla-extract/css';

import { colorVars } from '../default-theme/src/theme.js';

export const base = style({
  backgroundColor: colorVars.colors.grey[25],

  '::after': {
    content: 'none',
  },
  '::before': {
    content: 'none',
  },
});
