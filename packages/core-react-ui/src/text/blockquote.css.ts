import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '../theme';

export const base = style({
  display: 'block',

  marginLeft: '0px',
  marginRight: '0px',

  userSelect: 'text',
  borderRadius: 4,
  color: colorVars.colors.grey[900],
  backgroundColor: colorVars.colorIntents.elevation1,
  border: `1px solid ${colorVars.colors.grey[50]}`,
  padding: `1.3em`,
});
