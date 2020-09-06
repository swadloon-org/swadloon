import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  justifyContent: 'space-between',
  padding: `var(${theme.sizing.sizeCSSVarNames.x7}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      width: '100%',
      padding: `var(${theme.sizing.sizeCSSVarNames.x7}) 0`,
    },
  },
}));

export const AlignContentLeft = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      margin: '0 auto',
    },
  },
}));

export const AlignContentRight = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 auto',
    },
  },
}));

export const imageTabs = style((theme: DesignSystem) => ({
  marginBottom: `calc(var(${theme.sizing.sizeCSSVarNames.x3}) * 2)`,
}));

export const image = style((theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.x6})`,
  width: '250px',
  height: '250px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx}) and (max-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '366px',
      height: '366px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '535px',
      height: '535px',
      marginLeft: `auto`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

export const alignContentRight = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      marginLeft: `var(${theme.sizing.sizeCSSVarNames.x6})`,
    },
  },
}));

export const alignContentLeft = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      marginRight: `var(${theme.sizing.sizeCSSVarNames.x6})`,
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.x6})`,
  maxWidth: '400px',
  textAlign: 'center',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      marginBottom: `var(${theme.sizing.sizeCSSVarNames.x5})`,
      maxWidth: '500px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '500px',
      textAlign: 'left',
    },
  },
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.x5})`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '500px',
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
