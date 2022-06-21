import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  width: 200,
  height: 130,
  padding: `0.5em`,
  overflow: 'hidden',

  background: `white`,
});

export const halfStar = style({
  verticalAlign: '-1px',
  stroke: '#fbbc04',
});

globalStyle(`${halfStar} path:last-child`, {
  fill: '#fbbc04',
});

export const star = style({
  verticalAlign: '-1px',
  stroke: '#fbbc04',
});

globalStyle(`${star} path`, {
  fill: '#fbbc04',
});
