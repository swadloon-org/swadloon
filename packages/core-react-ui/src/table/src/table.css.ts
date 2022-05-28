import { style } from '@vanilla-extract/css';

import { colorVars } from '../default-theme/src/theme';

export const wrapper = style({
  overflowX: 'auto',
  width: '100%',
});

export const table = style({
  width: '100%',
  borderWidth: '0px',
  borderStyle: 'solid',
  borderCollapse: 'separate',
  borderColor: colorVars.colors.grey['100'],
});
