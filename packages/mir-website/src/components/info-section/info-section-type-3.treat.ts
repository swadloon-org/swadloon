import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const type3 = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X6}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      width: '100%',
      padding: `var(${theme.sizing.sizeCSSVarNames.X7}) 0`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      margin: 'auto 0 auto auto',
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginBottom: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) *2)`,
  maxWidth: '400px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '460px',
      textAlign: 'left',
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
      maxWidth: '460px',
      textAlign: 'left',
    },
  },
}));

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'center',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      alignSelf: 'flex-start',
    },
  },
}));

export const tabsWrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  rowGap: `var(${theme.sizing.sizeCSSVarNames.X1})`,
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X3} * 2)`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
      maxWidth: '610px',
    },
  },
}));
