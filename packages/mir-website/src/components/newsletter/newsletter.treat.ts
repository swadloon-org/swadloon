import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

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
export const container = style((theme: DesignSystem) => ({
  margin: theme.layout.contentMargins.MOBILE.valuePx,

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
export const formulaire = style((theme: DesignSystem) => ({
  display: 'grid',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));
export const subtitle = style((theme: DesignSystem) => ({
  textAlign: 'center',
  paddingTop: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      textAlign: 'left',
    },
  },
}));
export const title = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X6}) 0`,
  textAlign: 'center',
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      textAlign: 'left',
      padding: `var(${theme.sizing.sizeCSSVarNames.X3}) 0`,
    },
  },
}));

globalStyle(`${formulaire} input`, (theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X3})`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));
