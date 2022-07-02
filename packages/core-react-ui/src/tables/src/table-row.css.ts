import { style } from '@vanilla-extract/css';

import { colorVars } from '../default-theme/src/theme.js';

export const base = style({
  borderColor: colorVars.colors.grey['100'],
  borderWidth: '0px',
  borderBottomWidth: '1px',

  boxSizing: 'border-box',
  borderStyle: 'solid',
});
