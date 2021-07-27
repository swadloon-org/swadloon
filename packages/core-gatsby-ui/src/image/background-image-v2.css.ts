import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'grid',
  position: 'absolute',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const image = style({
  gridArea: '1/1',
  // You can set a maximum height for the image, if you wish.
  // maxHeight: 600,
});

export const container = style({
  width: `100%`,
  height: `100%`,
  display: 'grid',
  alignContent: 'center',
  // By using the same grid area for both, they are stacked on top of each other
  gridArea: '1/1',
  position: 'relative',
  // This centers the other elements inside the hero component
  placeItems: 'center',
});
