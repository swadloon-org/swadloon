import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const h1 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.H1.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.H1.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.H1.fontWeight,
  textTransform: theme.typography.headings.MOBILE.H1.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.H1.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.H1.capsizeRem,
    },
  },
}));

export const h2 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.H2.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.H2.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.H2.fontWeight,
  textTransform: theme.typography.headings.MOBILE.H2.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.H2.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.H2.capsizeRem,
    },
  },
}));

export const h3 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.H3.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.H3.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.H3.fontWeight,
  textTransform: theme.typography.headings.MOBILE.H3.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.H3.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.H3.capsizeRem,
    },
  },
}));

export const h4 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.H4.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.H4.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.H4.fontWeight,
  textTransform: theme.typography.headings.MOBILE.H4.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.H4.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.H4.capsizeRem,
    },
  },
}));
