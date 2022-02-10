import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'center',
  padding: sizeVars.x5,

  backgroundColor: colorVars.colorIntents.background1,
});

export const links = style({
  alignContent: 'center',
  justifyContent: 'center',
});

export const copyright = style({
  textAlign: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  color: colorVars.colors.grey[600],
});
