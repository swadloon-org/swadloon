import { style } from '@vanilla-extract/css';

import { sizeVars } from '../default-theme/src/theme.js';

export const wrapper = style({
  padding: sizeVars.x6,
});

export const box = style({
  background: 'rgba(134,180,255,0.1)',
  height: '80px',
  width: '80px',
  position: 'relative',
  borderRadius: '4px',
  zIndex: 10,
});

export const boxScrolling = style({
  background: '#91c9f9',
  borderRadius: '4px',
  height: '80px',
  width: '80px',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  opacity: 0.8,
});
