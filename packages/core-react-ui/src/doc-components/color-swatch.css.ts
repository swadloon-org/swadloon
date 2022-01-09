import { style } from '@vanilla-extract/css';

import { effectsVars, sizeVars } from '../theme';

export const wrapper = style({
  width: `100%`,
  userSelect: 'text',
});

export const squareColor = style({
  width: `100%`,
  height: `100%`,
  padding: `${sizeVars.x3}`,
  display: 'flex',
  alignItems: 'center',
  boxShadow: effectsVars.boxShadows.light,
  userSelect: 'auto',
});
