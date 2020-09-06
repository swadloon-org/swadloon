import { DesignSystem, LABEL } from 'core-design-system';
import { style, CSSProperties } from 'treat';

const base: CSSProperties = {
  display: 'block',
};

type Styles = { [key in keyof typeof LABEL]: string };

export const mediumBoldUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.mediumBoldUppercase.capsizeRem,
  fontFamily: theme.typography.labels.mobile.mediumBoldUppercase.fontFamily,
  fontWeight: theme.typography.labels.mobile.mediumBoldUppercase.fontWeight,
  letterSpacing: theme.typography.labels.mobile.mediumBoldUppercase.letterSpacing,
  textTransform: theme.typography.labels.mobile.mediumBoldUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.mediumBoldUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.mediumBoldUppercase.capsizeRem,
    },
  },
}));

export const mediumUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.mediumUppercase.capsizeRem,
  fontFamily: theme.typography.labels.mobile.mediumUppercase.fontFamily,
  fontWeight: theme.typography.labels.mobile.mediumUppercase.fontWeight,
  letterSpacing: theme.typography.labels.mobile.mediumUppercase.letterSpacing,
  textTransform: theme.typography.labels.mobile.mediumUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.mediumUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.mediumUppercase.capsizeRem,
    },
  },
}));

export const mediumBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.mediumBold.capsizeRem,
  fontFamily: theme.typography.labels.mobile.mediumBold.fontFamily,
  fontWeight: theme.typography.labels.mobile.mediumBold.fontWeight,
  letterSpacing: theme.typography.labels.mobile.mediumBold.letterSpacing,
  textTransform: theme.typography.labels.mobile.mediumBold.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.mediumBold.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.mediumBold.capsizeRem,
    },
  },
}));

export const mediumRegular = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.mediumRegular.capsizeRem,
  fontFamily: theme.typography.labels.mobile.mediumRegular.fontFamily,
  fontWeight: theme.typography.labels.mobile.mediumRegular.fontWeight,
  letterSpacing: theme.typography.labels.mobile.mediumRegular.letterSpacing,
  textTransform: theme.typography.labels.mobile.mediumRegular.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.mediumRegular.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.mediumRegular.capsizeRem,
    },
  },
}));

export const smallBoldUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.smallBoldUppercase.capsizeRem,
  fontFamily: theme.typography.labels.mobile.smallBoldUppercase.fontFamily,
  fontWeight: theme.typography.labels.mobile.smallBoldUppercase.fontWeight,
  letterSpacing: theme.typography.labels.mobile.smallBoldUppercase.letterSpacing,
  textTransform: theme.typography.labels.mobile.smallBoldUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.smallBoldUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.smallBoldUppercase.capsizePx,
    },
  },
}));

export const smallUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.smallUppercase.capsizeRem,
  fontFamily: theme.typography.labels.mobile.smallUppercase.fontFamily,
  fontWeight: theme.typography.labels.mobile.smallUppercase.fontWeight,
  letterSpacing: theme.typography.labels.mobile.smallUppercase.letterSpacing,
  textTransform: theme.typography.labels.mobile.smallUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.smallUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.smallUppercase.capsizeRem,
    },
  },
}));

export const smallBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.smallBold.capsizeRem,
  fontFamily: theme.typography.labels.mobile.smallBold.fontFamily,
  fontWeight: theme.typography.labels.mobile.smallBold.fontWeight,
  letterSpacing: theme.typography.labels.mobile.smallBold.letterSpacing,
  textTransform: theme.typography.labels.mobile.smallBold.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.smallBold.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.smallBold.capsizeRem,
    },
  },
}));

export const smallRegular = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.smallRegular.capsizeRem,
  fontFamily: theme.typography.labels.mobile.smallRegular.fontFamily,
  fontWeight: theme.typography.labels.mobile.smallRegular.fontWeight,
  letterSpacing: theme.typography.labels.mobile.smallRegular.letterSpacing,
  textTransform: theme.typography.labels.mobile.smallRegular.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.smallRegular.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.smallRegular.capsizeRem,
    },
  },
}));

export const xSmallBoldUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.xSmallBoldUppercase.capsizeRem,
  fontFamily: theme.typography.labels.mobile.xSmallBoldUppercase.fontFamily,
  fontWeight: theme.typography.labels.mobile.xSmallBoldUppercase.fontWeight,
  letterSpacing: theme.typography.labels.mobile.xSmallBoldUppercase.letterSpacing,
  textTransform: theme.typography.labels.mobile.xSmallBoldUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.xSmallBoldUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.xSmallBoldUppercase.capsizeRem,
    },
  },
}));

export const xSmallUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.xSmallUppercase.capsizeRem,
  fontFamily: theme.typography.labels.mobile.xSmallUppercase.fontFamily,
  fontWeight: theme.typography.labels.mobile.xSmallUppercase.fontWeight,
  letterSpacing: theme.typography.labels.mobile.xSmallUppercase.letterSpacing,
  textTransform: theme.typography.labels.mobile.xSmallUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.xSmallUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.xSmallUppercase.capsizeRem,
    },
  },
}));

export const xSmallBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.xSmallBold.capsizeRem,
  fontFamily: theme.typography.labels.mobile.xSmallBold.fontFamily,
  fontWeight: theme.typography.labels.mobile.xSmallBold.fontWeight,
  letterSpacing: theme.typography.labels.mobile.xSmallBold.letterSpacing,
  textTransform: theme.typography.labels.mobile.xSmallBold.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.xSmallBold.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.xSmallBold.capsizeRem,
    },
  },
}));

export const xSmallRegular = style((theme: DesignSystem) => ({
  ...theme.typography.labels.mobile.xSmallRegular.capsizeRem,
  fontFamily: theme.typography.labels.mobile.xSmallRegular.fontFamily,
  fontWeight: theme.typography.labels.mobile.xSmallRegular.fontWeight,
  letterSpacing: theme.typography.labels.mobile.xSmallRegular.letterSpacing,
  textTransform: theme.typography.labels.mobile.xSmallRegular.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.labels.tablet.xSmallRegular.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.labels.desktop.xSmallRegular.capsizeRem,
    },
  },
}));

const styles: Styles = {
  mediumBoldUppercase,
  mediumUppercase,
  mediumBold,
  mediumRegular,
  smallBoldUppercase,
  smallUppercase,
  smallBold,
  smallRegular,
  xSmallBoldUppercase,
  xSmallUppercase,
  xSmallBold,
  xSmallRegular,
};
