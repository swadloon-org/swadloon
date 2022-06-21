import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '../default-theme/src/theme.js';

export const base = style({
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  height: `100%`,
  padding: `0 ${sizeVars.x2}`,

  userSelect: `none`,
});

export const bar = style({
  border: 'none',
  borderRight: `2px solid ${colorVars.colors.grey[300]}`,
  margin: 0,
  height: `min(25%, 24px)`,
});

export const empty = style({
  border: 'none',
  borderRight: `2px solid transparent`,
  margin: 0,
});
