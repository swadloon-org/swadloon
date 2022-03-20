import { style } from '@vanilla-extract/css';

import { colorVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  width: '100%',
});

/**
 *
 * Variants
 *
 */

export const primary = style({
  backgroundColor: colorVars.colorIntents.elevation0Grey,
});

export const secondary = style({
  backgroundColor: colorVars.colorIntents.elevation1Grey,
});

export const tertiary = style({
  backgroundColor: colorVars.colorIntents.elevation2Grey,
});
