import { style } from '@vanilla-extract/css';

import { getCSSColor } from '../utilities/colors.utilities';

export const wrapper = style({
  position: 'relative',
  padding: `${sizeVars.x4} ${sizeVars.x4}`,
  color: colorVars.colorIntents.secondaryText,
});

export const active = style({
  backgroundColor: getCSSColor({ ...theme.colors.colors.primary[500], a: 10 }),
  color: colorVars.colors.grey[1000],
  '::before': {
    content: '" "',
    left: 0,
    top: 0,
    width: '4px',
    bottom: 0,
    position: 'absolute',
    backgroundColor: colorVars.colors.primary[500],
  },
});

export const disabled = style({
  backgroundColor: colorVars.colors.grey[25],
  color: colorVars.colors.grey[600],
});
