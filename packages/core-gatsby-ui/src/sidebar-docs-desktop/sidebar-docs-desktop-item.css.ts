import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  position: 'relative',
});
export const level0 = style({
  padding: `0.8em 0 0.8em calc(16px + ${sizeVars.x1})`,
  fontWeight: 400,
});
export const level1 = style({
  padding: `0.8em 0 0.8em calc(16px + 2 * ${sizeVars.x1})`,
  fontWeight: 400,
});
export const link = style({});
export const linkActive = style({
  color: colorVars.colorIntents.primary,
});
