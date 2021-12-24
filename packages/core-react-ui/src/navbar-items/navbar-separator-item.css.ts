import { globalStyle, style } from '@vanilla-extract/css';

import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { colorVars, sizeVars } from '../theme';

export const base = style({
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  height: `100%`,
  padding: `0 ${sizeVars.x2}`,

  userSelect: `none`,
});

export const bar = style({
  border: 'none',
  borderRight: `2px solid ${colorVars.colors.grey[100]}`,
  margin: 0,
  height: `min(25%, 24px)`,
});

export const empty = style({
  border: 'none',
  borderRight: `2px solid transparent`,
  margin: 0,
});

globalStyle(`${globalThemeReversedSelector} ${bar}`, {
  borderColor: colorVars.colors.grey[600],
});
