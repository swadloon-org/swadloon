import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const h1 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h1.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h1.fontFamily,
  fontWeight: theme.typography.headings.mobile.h1.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h1.letterSpacing,
  textTransform: theme.typography.headings.mobile.h1.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.headings.tablet.h1.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.headings.desktop.h1.capsizeRem,
    },
  },
}));

export const h2 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h2.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h2.fontFamily,
  fontWeight: theme.typography.headings.mobile.h2.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h2.letterSpacing,
  textTransform: theme.typography.headings.mobile.h2.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.headings.tablet.h2.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.headings.desktop.h2.capsizeRem,
    },
  },
}));

export const h3 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h3.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h3.fontFamily,
  fontWeight: theme.typography.headings.mobile.h3.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h3.letterSpacing,
  textTransform: theme.typography.headings.mobile.h3.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.headings.tablet.h3.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.headings.desktop.h3.capsizeRem,
    },
  },
}));

export const h4 = style((theme: DesignSystem) => ({
  ...theme.typography.headings.mobile.h4.capsizeRem,
  fontFamily: theme.typography.headings.mobile.h4.fontFamily,
  fontWeight: theme.typography.headings.mobile.h4.fontWeight,
  letterSpacing: theme.typography.headings.mobile.h4.letterSpacing,
  textTransform: theme.typography.headings.mobile.h4.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.headings.tablet.h4.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.headings.desktop.h4.capsizeRem,
    },
  },
}));
