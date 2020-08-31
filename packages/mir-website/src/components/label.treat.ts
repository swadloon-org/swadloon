import { DesignSystem, LABEL } from 'core-design-system';
import { style, CSSProperties } from 'treat';

const base: CSSProperties = {
  display: 'block',
};

type Styles = { [key in keyof typeof LABEL]: string };

export const mediumBoldUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.mediumBoldUppercase.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.mediumBoldUppercase.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.mediumBoldUppercase.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.mediumBoldUppercase.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.mediumBoldUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.mediumBoldUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.mediumBoldUppercase.capsizeRem,
    },
  },
}));

export const mediumUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.mediumUppercase.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.mediumUppercase.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.mediumUppercase.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.mediumUppercase.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.mediumUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.mediumUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.mediumUppercase.capsizeRem,
    },
  },
}));

export const mediumBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.mediumBold.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.mediumBold.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.mediumBold.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.mediumBold.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.mediumBold.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.mediumBold.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.mediumBold.capsizeRem,
    },
  },
}));

export const mediumRegular = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.mediumRegular.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.mediumRegular.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.mediumRegular.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.mediumRegular.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.mediumRegular.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.mediumRegular.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.mediumRegular.capsizeRem,
    },
  },
}));

export const smallBoldUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.smallBoldUppercase.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.smallBoldUppercase.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.smallBoldUppercase.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.smallBoldUppercase.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.smallBoldUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.smallBoldUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.smallBoldUppercase.capsizePx,
    },
  },
}));

export const smallUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.smallUppercase.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.smallUppercase.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.smallUppercase.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.smallUppercase.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.smallUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.smallUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.smallUppercase.capsizeRem,
    },
  },
}));

export const smallBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.smallBold.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.smallBold.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.smallBold.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.smallBold.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.smallBold.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.smallBold.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.smallBold.capsizeRem,
    },
  },
}));

export const smallRegular = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.smallRegular.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.smallRegular.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.smallRegular.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.smallRegular.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.smallRegular.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.smallRegular.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.smallRegular.capsizeRem,
    },
  },
}));

export const xSmallBoldUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.xSmallBoldUppercase.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.xSmallBoldUppercase.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.xSmallBoldUppercase.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.xSmallBoldUppercase.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.xSmallBoldUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.xSmallBoldUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.xSmallBoldUppercase.capsizeRem,
    },
  },
}));

export const xSmallUppercase = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.xSmallUppercase.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.xSmallUppercase.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.xSmallUppercase.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.xSmallUppercase.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.xSmallUppercase.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.xSmallUppercase.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.xSmallUppercase.capsizeRem,
    },
  },
}));

export const xSmallBold = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.xSmallBold.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.xSmallBold.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.xSmallBold.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.xSmallBold.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.xSmallBold.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.xSmallBold.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.xSmallBold.capsizeRem,
    },
  },
}));

export const xSmallRegular = style((theme: DesignSystem) => ({
  ...theme.typography.labels.MOBILE.xSmallRegular.capsizeRem,
  fontFamily: theme.typography.labels.MOBILE.xSmallRegular.fontFamily,
  fontWeight: theme.typography.labels.MOBILE.xSmallRegular.fontWeight,
  letterSpacing: theme.typography.labels.MOBILE.xSmallRegular.letterSpacing,
  textTransform: theme.typography.labels.MOBILE.xSmallRegular.textTransform,
  ...base,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      ...theme.typography.labels.TABLET.xSmallRegular.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      ...theme.typography.labels.DESKTOP.xSmallRegular.capsizeRem,
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
