import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
  paddingTop: `var(${theme.sizing.sizeCSSVarNames.X6})`,
  paddingBottom: `var(${theme.sizing.sizeCSSVarNames.X6})`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      padding: `0 ${theme.layout.contentMargins.TABLET.valuePx}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      padding: `0 ${theme.layout.contentMargins.DESKTOP.valuePx}`,
    },
  },
}));

//
// Container
//

export const container = style((theme: DesignSystem) => ({
  margin: `0 ${theme.layout.contentMargins.MOBILE.valuePx}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      padding: `var(${theme.sizing.sizeCSSVarNames.X6}) 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content . form form form form .'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      padding: `var(${theme.sizing.sizeCSSVarNames.X6}) 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content content . form form form form'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_MEDIUM.valuePx})`]: {
      gridTemplateAreas: "'content content content content content . form form form . . .'",
    },
  },
}));

//
// Content
//

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      gridArea: 'content',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      gridArea: 'content',
    },
  },
}));

//
// Container Form
//

export const containerForm = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      gridArea: 'form',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      gridArea: 'form',
    },
  },
}));

//
// Formulaire
//

export const formulaire = style((theme: DesignSystem) => ({
  display: 'grid',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

//
// Subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  textAlign: 'center',
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      textAlign: 'left',
    },
  },
}));

//
// Title
//

export const title = style((theme: DesignSystem) => ({
  marginTop: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  textAlign: 'center',
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      textAlign: 'left',
      marginTop: `var(${theme.sizing.sizeCSSVarNames.X4})`,
      marginBottom: `var(${theme.sizing.sizeCSSVarNames.X4})`,
    },
  },
}));

//
// Size of the input inside of the form - Deprecated
//

globalStyle(`${formulaire} input`, (theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X3})`,
}));
