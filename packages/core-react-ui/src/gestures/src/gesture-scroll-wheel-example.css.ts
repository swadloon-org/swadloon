import { style } from '@vanilla-extract/css';

import { sizeVars } from '../default-theme/src/theme';

export const wrapper = style({
  padding: sizeVars.x6,
});

export const box = style({
  transition: 'transform 350ms ease-in-out',
});

export const boxDiv = style({
  fontSize: '10px',
  color: 'white',
  minHeight: '80px',
  width: '80px',
  background: '#91c9f9',
  margin: 'sizeVars.x6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});
