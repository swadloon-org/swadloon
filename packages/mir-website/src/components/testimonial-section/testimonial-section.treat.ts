import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscale100,
}));
export const container = style((theme: DesignSystem) => ({
  margin: '0 auto',
  maxWidth: '1200px',
  padding: `var(${theme.sizing.sizeCSSVarNames.X5})`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));
export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '474px',
  padding: ` var(${theme.sizing.sizeCSSVarNames.X5}) 0`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));
export const content = style((theme: DesignSystem) => ({
  display: 'grid',
  gridColumn: '1',
  gridTemplateColumns: '1fr',
  gridGap: `0 var(${theme.sizing.sizeCSSVarNames.X4})`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      gridColumn: '1',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: `0 var(${theme.sizing.sizeCSSVarNames.X4})`,
    },
  },
}));
export const tileComment = style((theme: DesignSystem) => ({
  maxWidth: '350px',
  margin: '0 auto',
  paddingBottom: `var(${theme.sizing.sizeCSSVarNames.X4})`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: { maxWidth: '450px' },

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));
export const blocContent = style((theme: DesignSystem) => ({
  position: 'relative',
  padding: `var(${theme.sizing.sizeCSSVarNames.X4})`,
  boxShadow: '6px 6px 24px #D7D7D7',
  borderRadius: '30px 30px 30px 0px',
  marginBottom: '25px',

  backgroundColor: theme.colors.greyscale0,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));
export const triangle = style((theme: DesignSystem) => ({
  position: 'absolute',
  width: '0',
  height: '0',
  borderTop: '0px solid transparent',
  borderLeft: `25px solid ${theme.colors.greyscale0}`,
  borderBottom: '25px solid transparent',
  bottom: '-25px',
  left: '0',
}));
export const author = style((theme: DesignSystem) => ({
  paddingTop: `var(${theme.sizing.sizeCSSVarNames.X4})`,
  display: 'grid',
  gridGap: `var(${theme.sizing.sizeCSSVarNames.X2})`,
}));
export const name = style((theme: DesignSystem) => ({}));
export const job = style((theme: DesignSystem) => ({
  color: theme.colors.primary500,
}));
