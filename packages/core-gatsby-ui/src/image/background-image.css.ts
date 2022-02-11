import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'absolute',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const container = style({
  width: `100%`,
  height: `100%`,
  display: 'grid',
  alignContent: 'center',
});
