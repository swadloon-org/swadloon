import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

const baseDisplay = {
  display: 'block',
};

export const small = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.SMALL.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.SMALL.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.SMALL.fontWeight,
  textTransform: theme.typography.labels.MOBILE.SMALL.textTransform,
  ...baseDisplay,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.SMALL.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.SMALL.capsizeRem,
    },
  },
}));

export const medium = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.MEDIUM.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.MEDIUM.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.MEDIUM.fontWeight,
  textTransform: theme.typography.labels.MOBILE.MEDIUM.textTransform,
  ...baseDisplay,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.MEDIUM.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.MEDIUM.capsizeRem,
    },
  },
}));

export const smallUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.SMALL_BOLD_UPPERCASE.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.SMALL_BOLD_UPPERCASE.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.SMALL_BOLD_UPPERCASE.fontWeight,
  textTransform: theme.typography.labels.MOBILE.SMALL_BOLD_UPPERCASE.textTransform,
  letterSpacing: '2px',
  ...baseDisplay,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.SMALL_BOLD_UPPERCASE.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.SMALL_BOLD_UPPERCASE.capsizeRem,
    },
  },
}));

export const mediumUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.MEDIUM_BOLD_UPPERCASE.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.MEDIUM_BOLD_UPPERCASE.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.MEDIUM_BOLD_UPPERCASE.fontWeight,
  textTransform: theme.typography.labels.MOBILE.MEDIUM_BOLD_UPPERCASE.textTransform,
  ...baseDisplay,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.MEDIUM_BOLD_UPPERCASE.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.MEDIUM_BOLD_UPPERCASE.capsizeRem,
    },
  },
}));

export const smallBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.SMALL_UPPERCASE.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.SMALL_UPPERCASE.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.SMALL_UPPERCASE.fontWeight,
  textTransform: theme.typography.labels.MOBILE.SMALL_UPPERCASE.textTransform,
  ...baseDisplay,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.SMALL_UPPERCASE.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.SMALL_UPPERCASE.capsizeRem,
    },
  },
}));

export const mediumBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.MEDIUM_UPPERCASE.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.MEDIUM_UPPERCASE.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.MEDIUM_UPPERCASE.fontWeight,
  textTransform: theme.typography.labels.MOBILE.MEDIUM_UPPERCASE.textTransform,
  ...baseDisplay,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.MEDIUM_UPPERCASE.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.MEDIUM_UPPERCASE.capsizeRem,
    },
  },
}));
