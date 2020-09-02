import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `var(${theme.sizing.sizeCSSVarNames.X5}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const type4 = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X7}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const infoTilesWrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X6})`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      flexDirection: 'row',
    },
  },
}));

export const infoTile = style((theme: DesignSystem) => ({
  marginRight: 0,
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X4})`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      marginRight: `var(${theme.sizing.sizeCSSVarNames.X4})`,
      marginBottom: 0,
      ':last-child': {
        marginRight: 0,
      },
    },
  },
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '500px',
      textAlign: 'center',
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginBottom: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) *2)`,
  maxWidth: '400px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '500px',
      textAlign: 'center',
    },
  },
}));

export const extraPadding = style((theme: DesignSystem) => ({}));

export const image = style((theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '540px',
      height: '540px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: '366px',
      height: '366px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '540px',
      height: '540px',
    },
  },
}));
