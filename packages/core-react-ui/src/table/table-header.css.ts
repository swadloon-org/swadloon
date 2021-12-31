import { style } from '@vanilla-extract/css';

import { colorVars } from '../theme';

export const base = style({
  backgroundColor: colorVars.colors.grey[25],

  '::after': {
    content: 'none',
  },
  '::before': {
    content: 'none',
  },
});
