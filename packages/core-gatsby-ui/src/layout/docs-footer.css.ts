import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  width: `100%`,
});

export const content = style({
  display: 'flex',
  margin: `${sizeVars.x5} 0 0`,
  padding: `${sizeVars.x3} 0 ${sizeVars.x5}`,
  borderTop: `2px solid ${colorVars.colors.grey[100]}`,
});
