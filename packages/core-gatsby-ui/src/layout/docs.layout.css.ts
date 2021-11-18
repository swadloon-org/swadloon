import { colorVars, sizingVars } from '@newrade/core-react-ui/theme';
import { globalStyle, style } from '@vanilla-extract/css';

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

globalStyle(`html, ${global}`, {
  background: colorVars.colors.grey[1000],
});
