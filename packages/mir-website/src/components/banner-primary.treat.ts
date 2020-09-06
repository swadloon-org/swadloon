import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

//
// Container for the blue & black boxes
//

export const wrapper = style(({ layout }: DesignSystem) => ({
  position: `relative`,
  zIndex: 1,
  display: `grid`,
  gridTemplateColumns: `1fr`,

  '@media': {
    [`screen and (min-width: ${layout.breakpoints.tabletPortrait})`]: {
      position: 'relative',
      gridTemplateColumns: `${layout.contentMargins.tablet.px} 1fr ${layout.contentMargins.tablet.px}`,
      gridTemplateAreas: "'. mid .'",
    },
    [`screen and (min-width: ${layout.breakpoints.desktopSmall})`]: {
      justifyContent: 'center',
      justifyItems: 'center',
    },
  },
}));

//
// Wrapper for the content inside the containerBox
//

export const container = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.mobile.px}`,
  minHeight: `416px`,
  display: `flex`,
  alignItems: `center`,
  backgroundSize: `cover`,
  backgroundPositionY: `center`,
  backgroundColor: theme.colors.greyscale1000,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'mid',
      zIndex: 1,
      minHeight: `477px`,
      padding: `${theme.sizing.sizes.x6} ${theme.sizing.sizes.x5}`,
      margin: `0 0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      minHeight: '645px',
      maxWidth: '1200px',
      margin: `0 0 ${theme.sizing.sizes.x6}`,
      justifySelf: 'center',
      width: '100%',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium})`]: {
      maxWidth: '1600px',
    },
  },
}));

//
// Box black inside the containerBox
//

export const blackbox = style((theme: DesignSystem) => ({
  position: `absolute`,
  display: `none`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      position: `absolute`,
      display: `block`,
      bottom: `0`,
      zIndex: -1,
      height: `55%`,
      width: `100%`,
      backgroundColor: theme.colors.greyscale1000,
    },
  },
}));

//
// Blue box inside the containerBox
//

export const bluebox = style((theme: DesignSystem) => ({
  position: `absolute`,
  display: `none`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      position: `absolute`,
      display: `block`,
      top: `0`,
      zIndex: -1,
      width: `100%`,
      height: `45%`,
      backgroundColor: theme.colors.primary500,
    },
  },
}));

//
// content of the wrapper
//

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      width: 'fit-content',
      maxWidth: `462px`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      width: 'fit-content',
      maxWidth: `771px`,
    },
  },
}));

// **********************************************
//
// Primary variant for the bars top and bottom
//
// **********************************************

//
// top
//

export const containerBarTopPrimary = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
}));

export const topBarPrimary = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      paddingLeft: `${theme.sizing.sizes.x1}`,
    },
  },
}));

//
// bottom
//

export const containerBarBottomPrimary = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      display: 'flex',
    },
  },
}));

export const bottomBarPrimary = style((theme: DesignSystem) => ({
  width: '100%',
}));

globalStyle(`${bottomBarPrimary} rect`, (theme: DesignSystem) => ({
  width: '100%',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      width: '30%',
    },
  },
}));

//
// subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  marginRight: `${theme.sizing.sizes.x3}`,
  marginBottom: `${theme.sizing.sizes.x3}`,
  color: theme.colors.greyscale0,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      marginBottom: 0,
    },
  },
}));

//
// title
//

export const title = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0,
  margin: `${theme.sizing.sizes.x4} 0`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      margin: `${theme.sizing.sizes.x5} 0`,
    },
  },
}));
