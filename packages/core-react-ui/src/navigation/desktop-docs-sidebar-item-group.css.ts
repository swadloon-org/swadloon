import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: `0 ${sizeVars.x3} 0 0`,
});

export const group = style({
  padding: `${sizeVars.x2} 0`,
  cursor: 'pointer',
  userSelect: 'none',
});

export const children = style({
  padding: `0 0 ${sizeVars.x2}`,
});

export const icon = style({
  width: 18,
  height: 18,
  color: colorVars.colorIntents.secondaryText,
  willChange: 'transform',
});

export const iconOpened = style({
  transform: 'rotate(180deg)',
});
