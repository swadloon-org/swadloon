import { style } from '@vanilla-extract/css';

import { effectsVars, sizeVars } from '../theme.js';

export const wrapper = style({
  width: `100%`,
  userSelect: 'text',
});

export const squareColor = style({
  width: `100%`,
  height: `50px`,
  padding: `${sizeVars.x3}`,
  display: 'flex',
  alignItems: 'center',
  boxShadow: effectsVars.boxShadows.light,
  userSelect: 'auto',
});

export const text = style({
  mixBlendMode: 'difference',
  color: 'rgba(255,255,255,1)',
});
