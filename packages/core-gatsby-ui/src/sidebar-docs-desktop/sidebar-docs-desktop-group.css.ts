import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

export const level0 = style({
  padding: `0 0 0 0`,
});

export const level1 = style({
  padding: `0 0 0 calc(16px + ${sizeVars.x1})`,
});

export const group = style({
  padding: `calc(1.25 * ${sizeVars.x1}) 0`,
  gap: `${sizeVars.x1}`,
  cursor: 'pointer',
  userSelect: 'none',
});

export const children = style({
  padding: `0 0 ${sizeVars.x2}`,
});

export const icon = style({
  width: 16,
  height: 16,
  margin: `0 0 0 0`,

  color: colorVars.colorIntents.secondaryText,

  willChange: 'transform',
  transition: 'transform 200ms ease-out',
  transform: 'rotate(-90deg)',
});

export const iconOpened = style({
  transform: 'rotate(0deg)',
});
