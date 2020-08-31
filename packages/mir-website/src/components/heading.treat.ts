import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const h1 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.h1.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.h1.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.h1.fontWeight,
  letterSpacing: theme.typography.headings.MOBILE.h1.letterSpacing,
  textTransform: theme.typography.headings.MOBILE.h1.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.h1.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.h1.capsizeRem,
    },
  },
}));

export const h2 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.h2.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.h2.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.h2.fontWeight,
  letterSpacing: theme.typography.headings.MOBILE.h2.letterSpacing,
  textTransform: theme.typography.headings.MOBILE.h2.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.h2.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.h2.capsizeRem,
    },
  },
}));

export const h3 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.h3.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.h3.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.h3.fontWeight,
  letterSpacing: theme.typography.headings.MOBILE.h3.letterSpacing,
  textTransform: theme.typography.headings.MOBILE.h3.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.h3.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.h3.capsizeRem,
    },
  },
}));

export const h4 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.MOBILE.h4.capsizeRem,
  fontFamily: theme.typography.headings.MOBILE.h4.fontFamily,
  fontWeight: theme.typography.headings.MOBILE.h4.fontWeight,
  letterSpacing: theme.typography.headings.MOBILE.h4.letterSpacing,
  textTransform: theme.typography.headings.MOBILE.h4.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.headings.TABLET.h4.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.headings.DESKTOP.h4.capsizeRem,
    },
  },
}));
