import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  paddingTop: `var(${theme.sizing.sizeCSSVarNames.x6})`,
  paddingBottom: `var(${theme.sizing.sizeCSSVarNames.x7})`,

  backgroundColor: theme.colors.greyscale100,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      padding: `var(${theme.sizing.sizeCSSVarNames.x5}) ${theme.layout.contentMargins.TABLET.valuePx}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      padding: `var(${theme.sizing.sizeCSSVarNames.x5}) ${theme.layout.contentMargins.DESKTOP.valuePx}`,
    },
  },
}));

export const Default = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale1000,
}));

export const reversed = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

//
// Container
//

export const container = style((theme: DesignSystem) => ({
  margin: `0 ${theme.layout.contentMargins.MOBILE.valuePx}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      padding: `var(${theme.sizing.sizeCSSVarNames.x6}) 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content content . btn btn btn btn '",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },

    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      padding: `var(${theme.sizing.sizeCSSVarNames.x6}) 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content . btn btn btn . . .'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_MEDIUM.valuePx})`]: {
      gridTemplateAreas: "'content content content content content . btn btn btn . . .'",
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
// Container Button
//

export const buttonContainer = style((theme: DesignSystem) => ({
  display: 'flex',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      gridArea: 'btn',
      display: 'grid',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      gridArea: 'btn',
      display: 'grid',
    },
  },
}));

//
// button
//

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'center',
  margin: '0 auto',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      alignSelf: 'flex-end',
      width: '100%',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      alignSelf: 'flex-end',
      width: '100%',
    },
  },
}));

//
// Subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  textAlign: 'center',
  color: 'currentColor',

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
  marginTop: `var(${theme.sizing.sizeCSSVarNames.x5})`,
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.x5})`,
  textAlign: 'center',
  color: 'currentColor',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '500px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      maxWidth: '700px',
      textAlign: 'left',
      marginTop: `var(${theme.sizing.sizeCSSVarNames.x4})`,
      marginBottom: `0`,
    },
  },
}));
