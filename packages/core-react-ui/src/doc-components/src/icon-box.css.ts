import { style } from '@vanilla-extract/css';

import { sizeVars } from '../theme.js';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const icon = style({
  padding: sizeVars.x2,
});
