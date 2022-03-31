import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars } from '@newrade/core-react-ui/theme';

export const layout = style({
  background: colorVars.colorIntents.elevation0,
});

globalStyle('html,body', {
  background: colorVars.colorIntents.elevation0,
});
