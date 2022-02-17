import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  userSelect: 'auto',
});

export const content = style({
  width: '100%',
});

export const left = style({
  alignItems: 'flex-start',
  textAlign: 'left',
});

export const right = style({
  alignItems: 'flex-end',
  textAlign: 'right',
});

export const center = style({
  alignItems: 'center',
  textAlign: 'center',
});
