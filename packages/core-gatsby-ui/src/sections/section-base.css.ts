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
  backgroundColor: colorVars.colorIntents.background0,
});

export const secondary = style({
  backgroundColor: colorVars.colorIntents.background1,
});

export const tertiary = style({
  backgroundColor: colorVars.colorIntents.background2,
});
