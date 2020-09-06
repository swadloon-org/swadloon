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
    [`screen and (min-width: ${layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      position: 'relative',
      gridTemplateColumns: `${layout.contentMargins.TABLET.valuePx} 1fr ${layout.contentMargins.TABLET.valuePx}`,
      gridTemplateAreas: "'. mid .'",
    },
    [`screen and (min-width: ${layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      justifyContent: 'center',
      justifyItems: 'center',
    },
  },
}));

//
// Wrapper for the content inside the containerBox
//

export const container = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X6}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  minHeight: `416px`,
  display: `flex`,
  alignItems: `center`,
  backgroundSize: `cover`,
  backgroundPositionY: `center`,
  backgroundColor: theme.colors.greyscale1000,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      gridArea: 'mid',
      zIndex: 1,
      minHeight: `477px`,
      padding: `var(${theme.sizing.sizeCSSVarNames.X6}) var(${theme.sizing.sizeCSSVarNames.X5})`,
      margin: `0 0 ${theme.layout.contentMargins.TABLET.valuePx}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      minHeight: '645px',
      maxWidth: '1200px',
      margin: `0 0 var(${theme.sizing.sizeCSSVarNames.X6})`,
      justifySelf: 'center',
      width: '100%',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_MEDIUM.valuePx})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: 'fit-content',
      maxWidth: `462px`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
}));

export const topBarPrimary = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      paddingLeft: `var(${theme.sizing.sizeCSSVarNames.X1})`,
    },
  },
}));

//
// bottom
//

export const containerBarBottomPrimary = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '30%',
    },
  },
}));

//
// subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  marginRight: `var(${theme.sizing.sizeCSSVarNames.X3})`,
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X3})`,
  color: theme.colors.greyscale0,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      marginBottom: 0,
    },
  },
}));

//
// title
//

export const title = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0,
  margin: `var(${theme.sizing.sizeCSSVarNames.X4}) 0`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      margin: `var(${theme.sizing.sizeCSSVarNames.X5}) 0`,
    },
  },
}));
