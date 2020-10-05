import { DesignSystem } from 'core-design-system-old';
import { style, globalStyle } from 'treat';

//
// Container for the blue & black boxes
//

export const wrapper = style((theme: DesignSystem) => ({
  position: `relative`,
  zIndex: 1,
  display: `grid`,
  gridTemplateColumns: `1fr`,

  '@media': {
    [theme.layout.media.tablet]: {
      position: 'relative',
      gridTemplateColumns: `${theme.layout.contentMargins.tablet.px} 1fr ${theme.layout.contentMargins.tablet.px}`,
      gridTemplateAreas: "'. mid .'",
    },
    [theme.layout.media.desktop]: {
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
    [theme.layout.media.tablet]: {
      gridArea: 'mid',
      zIndex: 1,
      minHeight: `477px`,
      padding: `${theme.sizing.sizes.x6} ${theme.sizing.sizes.x5}`,
      margin: `0 0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      minHeight: '645px',
      maxWidth: '1200px',
      margin: `0 0 ${theme.sizing.sizes.x6}`,
      justifySelf: 'center',
      width: '100%',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium.px})`]: {
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
    [theme.layout.media.tabletPlus]: {
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
    [theme.layout.media.tabletPlus]: {
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
    [theme.layout.media.tablet]: {
      width: 'fit-content',
      maxWidth: `462px`,
    },
    [theme.layout.media.desktop]: {
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
    [theme.layout.media.desktop]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
}));

export const topBarPrimary = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      paddingLeft: `${theme.sizing.sizes.x1}`,
    },
  },
}));

//
// bottom
//

export const containerBarBottomPrimary = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
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
    [theme.layout.media.desktop]: {
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
    [theme.layout.media.desktop]: {
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
    [theme.layout.media.desktop]: {
      margin: `${theme.sizing.sizes.x5} 0`,
    },
  },
}));
