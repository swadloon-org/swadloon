import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '../default-theme/src/theme.js';

export const wrapper = style({
  userSelect: 'text',
  borderBottom: `0px solid ${colorVars.colors.grey[50]}`,
});

globalStyle(`${wrapper}:last-of-type`, {
  borderBottomWidth: `1px`,
});

globalStyle(`${wrapper} summary + *`, {
  marginTop: `${sizeVars.x3}`,
});

globalStyle(`${wrapper} > *:last-child`, {
  marginBottom: `${sizeVars.x5}`,
});
