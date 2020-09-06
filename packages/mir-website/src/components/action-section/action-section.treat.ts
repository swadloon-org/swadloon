import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

//
// Wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  paddingTop: `${theme.sizing.sizes.x6}`,
  paddingBottom: `${theme.sizing.sizes.x7}`,

  backgroundColor: theme.colors.greyscale100,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      padding: `${theme.sizing.sizes.x5} ${theme.layout.contentMargins.tablet.px}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      padding: `${theme.sizing.sizes.x5} ${theme.layout.contentMargins.desktop.px}`,
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
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      padding: `${theme.sizing.sizes.x6} 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content content content . btn btn btn btn '",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },

    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '1200px',
      padding: `${theme.sizing.sizes.x6} 0`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'content content content content content . btn btn btn . . .'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium})`]: {
      gridTemplateAreas: "'content content content content content . btn btn btn . . .'",
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
// Container Button
//

export const buttonContainer = style((theme: DesignSystem) => ({
  display: 'flex',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'btn',
      display: 'grid',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      alignSelf: 'flex-end',
      width: '100%',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
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
  color: 'currentColor',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '500px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      maxWidth: '700px',
      textAlign: 'left',
      marginTop: `${theme.sizing.sizes.x4}`,
      marginBottom: `0`,
    },
  },
}));
