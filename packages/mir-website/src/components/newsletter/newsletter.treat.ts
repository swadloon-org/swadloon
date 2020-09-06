import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
  paddingTop: `${theme.sizing.sizes.x6}`,
  paddingBottom: `${theme.sizing.sizes.x6}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      padding: `0 ${theme.layout.contentMargins.desktop.px}`,
    },
  },
}));

//
// Container
//

export const container = style((theme: DesignSystem) => ({
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      padding: `${theme.sizing.sizes.x6} 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content . form form form form .'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },

    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '1200px',
      padding: `${theme.sizing.sizes.x6} 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content content . form form form form'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium})`]: {
      gridTemplateAreas: "'content content content content content . form form form . . .'",
    },
  },
}));

//
// Content
//

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'content',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      gridArea: 'content',
    },
  },
}));

//
// Container Form
//

export const containerForm = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'form',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {},
  },
}));

//
// Subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  textAlign: 'center',
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      textAlign: 'left',
    },
  },
}));

//
// Title
//

export const title = style((theme: DesignSystem) => ({
  marginTop: `${theme.sizing.sizes.x5}`,
  marginBottom: `${theme.sizing.sizes.x5}`,
  textAlign: 'center',
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      textAlign: 'left',
      marginTop: `${theme.sizing.sizes.x4}`,
      marginBottom: `${theme.sizing.sizes.x4}`,
    },
  },
}));

//
// Size of the input inside of the form - Deprecated
//

globalStyle(`${formulaire} input`, (theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x3}`,
}));
