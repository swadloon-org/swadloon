import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const small = style((theme: DesignSystem) => ({
  ...theme.typography.paragraphs.MOBILE.SMALL.capsizeRem,
  fontFamily: theme.typography.paragraphs.MOBILE.SMALL.fontFamily,
  fontWeight: theme.typography.paragraphs.MOBILE.SMALL.fontWeight,
  textTransform: theme.typography.paragraphs.MOBILE.SMALL.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.paragraphs.TABLET.SMALL.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.paragraphs.DESKTOP.SMALL.capsizeRem,
    },
  },
}));
export const medium = style((theme: DesignSystem) => ({
  ...theme.typography.paragraphs.MOBILE.MEDIUM.capsizeRem,
  fontFamily: theme.typography.paragraphs.MOBILE.MEDIUM.fontFamily,
  fontWeight: theme.typography.paragraphs.MOBILE.MEDIUM.fontWeight,
  textTransform: theme.typography.paragraphs.MOBILE.MEDIUM.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.paragraphs.TABLET.MEDIUM.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.paragraphs.DESKTOP.MEDIUM.capsizeRem,
    },
  },
}));
export const large = style((theme: DesignSystem) => ({
  ...theme.typography.paragraphs.MOBILE.LARGE.capsizeRem,
  fontFamily: theme.typography.paragraphs.MOBILE.LARGE.fontFamily,
  fontWeight: theme.typography.paragraphs.MOBILE.LARGE.fontWeight,
  textTransform: theme.typography.paragraphs.MOBILE.LARGE.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.paragraphs.TABLET.LARGE.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.paragraphs.DESKTOP.LARGE.capsizeRem,
    },
  },
}));
