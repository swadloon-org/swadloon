import { style } from '@vanilla-extract/css';

import { colorVars } from '../default-theme/src/theme';

export const wrapper = style({
  color: colorVars.colorIntents.dangerAction,
});
