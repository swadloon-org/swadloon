import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

export const content = style({
  paddingTop: sizeVars.x4,
});

export const breadcrumbs = style({
  marginTop: sizeVars.x4,
  marginBottom: sizeVars.x3,
});

export const mainWrapper = style({
  backgroundColor: colorVars.colorIntents.elevation0,
});

globalStyle(`html`, {
  background: colorVars.colorIntents.elevation1,
});
