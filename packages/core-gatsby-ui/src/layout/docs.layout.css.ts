import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars, sizingVars } from '@newrade/core-react-ui/theme';

export const global = style({});

export const content = style({
  paddingTop: sizingVars.var.x4,
});

export const breadcrumbs = style({
  marginTop: sizingVars.var.x4,
  marginBottom: sizingVars.var.x3,
});

export const mainWrapper = style({
  backgroundColor: colorVars.colors.grey[0],
});

globalStyle(`:root, ${global}`, {
  background: colorVars.colorIntents.elevation0,
});
