import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  padding: `0 ${theme.layout.contentMargins.MOBILE.valueRem}`,
  height: `var(${theme.sizing.sizeCSSVarNames.X5})`,

  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      height: '73px',
      padding: `0 ${theme.layout.contentMargins.TABLET.valueRem}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      height: `var(${theme.sizing.sizeCSSVarNames.X6})`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 100px 1fr',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  width: '100%',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      gridTemplateColumns: '1fr 100px 1fr',
      justifyContent: 'center',
      justifyItems: 'center',
      maxWidth: '1200px',
    },
  },
}));

export const logo = style((theme: DesignSystem) => ({
  height: `var(${theme.sizing.sizeCSSVarNames.X4})`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      height: '40px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      height: `var(${theme.sizing.sizeCSSVarNames.X5})`,
    },
  },
}));

export const icon = style((theme: DesignSystem) => ({}));

globalStyle(`${icon} path`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0,
}));

export const mobileLeftToolbar = style((theme: DesignSystem) => ({
  display: 'flex',
  justifySelf: 'start',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'none',
    },
  },
}));
export const mobileRightToolbar = style((theme: DesignSystem) => ({
  display: 'flex',
  justifySelf: 'end',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'none',
    },
  },
}));

export const desktopLeftToolbar = style((theme: DesignSystem) => ({
  display: 'none',
  justifySelf: 'start',
  marginLeft: `var(${theme.sizing.sizeCSSVarNames.X2})`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
    },
  },
}));

globalStyle(`${desktopLeftToolbar} > *`, (theme: DesignSystem) => ({
  marginRight: `var(${theme.sizing.sizeCSSVarNames.X2})`,
}));

export const desktopRightToolbar = style((theme: DesignSystem) => ({
  display: 'none',
  justifySelf: 'end',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
    },
  },
}));

globalStyle(`${desktopRightToolbar} > *`, (theme: DesignSystem) => ({
  marginLeft: `var(${theme.sizing.sizeCSSVarNames.X3})`,
}));

export const desktopSocialButtons = style((theme: DesignSystem) => ({
  display: 'flex',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

export const language = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));
