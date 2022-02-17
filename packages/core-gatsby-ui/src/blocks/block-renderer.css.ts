import { style } from '@vanilla-extract/css';

export const left = style({
  justifyItems: 'flex-start',
  textAlign: 'left',
});

export const right = style({
  justifyItems: 'flex-end',
  textAlign: 'right',
});

export const center = style({
  justifyItems: 'center',
  textAlign: 'center',
});
