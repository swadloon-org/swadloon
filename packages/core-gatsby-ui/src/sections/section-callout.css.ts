import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  height: `auto`,
  width: `100%`,
});

export const background = style({
  position: 'absolute',
});

export const container = style({
  width: `100%`,
  height: `100%`,
  display: 'grid',
  alignContent: 'center',
});
