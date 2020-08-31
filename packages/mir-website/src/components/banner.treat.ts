import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

const baseWidth100 = {
  width: `100%`,
};

//
// Container for the blue & black boxes
//

export const containerBox = style(({ layout }: DesignSystem) => ({
  position: `relative`,
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

export const wrapper = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X6}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  minHeight: `416px`,
  display: `flex`,
  alignItems: `center`,
  backgroundSize: `cover`,
  backgroundPositionY: `center`,

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
      maxWidth: '1600px',
      margin: `0 0 var(${theme.sizing.sizeCSSVarNames.X6})`,
      justifySelf: 'center',
      width: '100%',
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

export const bottomBarPrimary = style((theme: DesignSystem) => ({}));

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
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

globalStyle(`${topBarSecondary} rect`, (theme: DesignSystem) => ({
  width: '214px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: '97px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

//
// bottom
//

export const containerBarBottomSecondary = style((theme: DesignSystem) => ({
  display: 'flex',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      justifyContent: 'flex-end',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

export const bottomBarSecondary = style((theme: DesignSystem) => ({
  width: '237px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: '291px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

globalStyle(`${bottomBarSecondary} rect`, (theme: DesignSystem) => ({
  width: '237px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: '291px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

//
// subtitle
//

export const subtitle = style((theme: DesignSystem) => ({
  marginRight: `var(${theme.sizing.sizeCSSVarNames.X3})`,
  color: theme.colors.greyscale0,
}));

//
// title
//

export const title = style((theme: DesignSystem) => ({
  margin: `var(${theme.sizing.sizeCSSVarNames.X5}) 0`,
  color: theme.colors.greyscale0,
}));

// export const rect = style((theme: DesignSystem) => ({
//   ...baseWidth100,
//   selectors: {
//     [` ${bottomBarPrimary} &`]: {
//       ...baseWidth100,
//     },
//   },
// }));
