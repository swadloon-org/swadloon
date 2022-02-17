import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  width: '100%',
  padding: `${sizeVars.x5} 0`,
});

/**
 *
 * Variants
 *
 */

export const primary = style({
  backgroundColor: colorVars.colorIntents.elevation1,
});

export const secondary = style({
  backgroundColor: colorVars.colorIntents.elevation1,
});

export const tertiary = style({
  backgroundColor: colorVars.colorIntents.elevation1,
});
