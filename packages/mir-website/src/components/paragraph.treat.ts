import { DesignSystem, PARAGRAPH } from 'core-design-system';
import { style } from 'treat';

type Styles = { [key in keyof typeof PARAGRAPH]: string };

export const large = style((theme: DesignSystem) => ({
  ...theme.typography.paragraphs.MOBILE.large.capsizeRem,
  fontFamily: theme.typography.paragraphs.MOBILE.large.fontFamily,
  fontWeight: theme.typography.paragraphs.MOBILE.large.fontWeight,
  textTransform: theme.typography.paragraphs.MOBILE.large.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.paragraphs.TABLET.large.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.paragraphs.DESKTOP.large.capsizeRem,
    },
  },
}));

export const medium = style((theme: DesignSystem) => ({
  ...theme.typography.paragraphs.MOBILE.medium.capsizeRem,
  fontFamily: theme.typography.paragraphs.MOBILE.medium.fontFamily,
  fontWeight: theme.typography.paragraphs.MOBILE.medium.fontWeight,
  textTransform: theme.typography.paragraphs.MOBILE.medium.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.paragraphs.TABLET.medium.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.paragraphs.DESKTOP.medium.capsizeRem,
    },
  },
}));

export const small = style((theme: DesignSystem) => ({
  ...theme.typography.paragraphs.MOBILE.small.capsizeRem,
  fontFamily: theme.typography.paragraphs.MOBILE.small.fontFamily,
  fontWeight: theme.typography.paragraphs.MOBILE.small.fontWeight,
  textTransform: theme.typography.paragraphs.MOBILE.small.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.paragraphs.TABLET.small.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.paragraphs.DESKTOP.small.capsizeRem,
    },
  },
}));

export const xSmall = style((theme: DesignSystem) => ({
  ...theme.typography.paragraphs.MOBILE.xSmall.capsizeRem,
  fontFamily: theme.typography.paragraphs.MOBILE.xSmall.fontFamily,
  fontWeight: theme.typography.paragraphs.MOBILE.xSmall.fontWeight,
  textTransform: theme.typography.paragraphs.MOBILE.xSmall.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.paragraphs.TABLET.xSmall.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.paragraphs.DESKTOP.xSmall.capsizeRem,
    },
  },
}));

const styles: Styles = {
  large,
  medium,
  small,
  xSmall,
};
