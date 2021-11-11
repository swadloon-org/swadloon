import { globalStyle, style } from '@vanilla-extract/css';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { colorVars } from '../theme';

export const wrapper = style({
  border: 'none',
  borderRight: `2px solid ${colorVars.colors.grey[100]}`,
  margin: 0,
  height: `10px`,
});

globalStyle(`${globalThemeReversedSelector} ${wrapper}`, {
  borderColor: colorVars.colors.grey[600],
});
