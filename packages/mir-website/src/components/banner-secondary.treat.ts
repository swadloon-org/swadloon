import { DesignSystem } from '@newrade/core-design-system';
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
  minHeight: `300px`,
  display: `flex`,
  alignItems: `center`,
  backgroundSize: `cover`,
  backgroundPositionY: `center`,
  backgroundPositionX: `center`,
  backgroundColor: theme.colors.greyscale1000,

  '@media': {
    [theme.layout.media.tablet]: {
      gridArea: 'mid',
      zIndex: 1,
      minHeight: `400px`,
      padding: `${theme.sizing.sizes.x6} ${theme.sizing.sizes.x5}`,
      margin: `0 0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      minHeight: `479px`,
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
// Secondary variant for the bars top and bottom
//
// **********************************************

//
// top
//

export const containerBarTopSecondary = style((theme: DesignSystem) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

export const topBarSecondary = style((theme: DesignSystem) => ({
  width: '214px',
  '@media': {
    [theme.layout.media.tablet]: {},
    [theme.layout.media.desktop]: {},
  },
}));

globalStyle(`${topBarSecondary} rect`, (theme: DesignSystem) => ({
  width: '214px',

  '@media': {
    [theme.layout.media.tablet]: {
      width: '97px',
    },
    [theme.layout.media.desktop]: {},
  },
}));

//
// bottom
//

export const containerBarBottomSecondary = style((theme: DesignSystem) => ({
  display: 'flex',
  width: '100%',
  '@media': {
    [theme.layout.media.tablet]: {
      justifyContent: 'flex-end',
    },
    [theme.layout.media.desktop]: {},
  },
}));

export const bottomBarSecondary = style((theme: DesignSystem) => ({
  width: '60%',
  marginLeft: 'auto',
  // '@media': {
  //   [theme.layout.media.tablet]: {
  //     width: '60%',
  //   },
  //   [theme.layout.media.desktop]: {},
  // },
}));

globalStyle(`${bottomBarSecondary} rect`, (theme: DesignSystem) => ({
  width: '100%',
}));

//
// title
//

export const title = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0,
  margin: `${theme.sizing.sizes.x5} 0`,
}));
