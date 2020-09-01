import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `var(${theme.sizing.sizeCSSVarNames.X5}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const type1reversed = style((theme: DesignSystem) => ({}));

export const type1default = style((theme: DesignSystem) => ({}));

export const type2 = style((theme: DesignSystem) => ({}));

export const type3 = style((theme: DesignSystem) => ({}));

export const type4 = style((theme: DesignSystem) => ({}));
export const AlignContentLeft = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      margin: '0 auto',
    },
  },
}));

export const AlignContentRight = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 auto',
    },
  },
}));

export const image = style((theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '540px',
      height: '540px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: '366px',
      height: '366px',
    },
  },
}));

export const imageTabs = style((theme: DesignSystem) => ({
  marginBottom: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) * 2)`,
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginBottom: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) *2)`,
  maxWidth: '400px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '460px',
      textAlign: 'left',
      selectors: {
        [`${type4} &`]: {
          textAlign: 'center',
        },
      },
    },
  },
}));

export const titleHighlight = style((theme: DesignSystem) => ({
  color: theme.colors.primary500,
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '460px',
      textAlign: 'left',

      selectors: {
        [`${type4} &`]: {
          textAlign: 'center',
        },
      },
    },
  },
}));

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'center',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      alignSelf: 'flex-start',

      // selectors: {
      //   [`${type2} &`]: {
      //     alignSelf: 'flex-start',
      //   },
      //   [`${type3} &`]: {
      //     alignSelf: 'flex-start',
      //   },
      // },
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {},
  },
}));

export const infoTilesWrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  gridRowGap: `var(${theme.sizing.sizeCSSVarNames.X4})`,
  gridColumnGap: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto',

  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X6})`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
}));

export const tabsWrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  rowGap: `var(${theme.sizing.sizeCSSVarNames.X1})`,
  marginBottom: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) * 2)`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      // selectors: {
      //   [`${type3} &`]: {
      //     display: 'flex',
      //     marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
      //     maxWidth: '610px',
      //   },
      // },
    },
  },
}));

globalStyle(`${type2} ~ ${type3} `, (theme: DesignSystem) => ({
  paddingTop: `var(${theme.sizing.sizeCSSVarNames.X5})`,
}));

// globalStyle(`${type1reversed} > *`, (theme: DesignSystem) => ({
//   maxWidth: '343px',
// }));

// globalStyle(`${type1default} > *`, (theme: DesignSystem) => ({
//   maxWidth: '343px',
// }));

// globalStyle(`${type2} ${button}`, (theme: DesignSystem) => ({
//   '@media': {
//     [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
//       alignSelf: 'flex-start',
//     },
//   },
// }));

// globalStyle(`${type2} ${content}`, (theme: DesignSystem) => ({
//   '@media': {
//     [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'stretch',
//       margin: 'auto auto auto 0',
//     },
//   },
// }));

// globalStyle(`${type3} ${image}`, (theme: DesignSystem) => ({
//   '@media': {
//     [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
//       width: '500px',
//       height: '500px',
//     },
//   },
// }));

// globalStyle(`${type3} ${button}`, (theme: DesignSystem) => ({
//   '@media': {
//     [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
//       alignSelf: 'flex-start',
//     },
//   },
// }));

// globalStyle(`${type3} ${content}`, (theme: DesignSystem) => ({
//   '@media': {
//     [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'stretch',
//       margin: 'auto 0 auto auto',
//     },
//   },
// }));

// globalStyle(`${type3} ${tabsWrapper}`, (theme: DesignSystem) => ({
//   '@media': {
//     [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
//       display: 'flex',
//       marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
//       maxWidth: '610px',
//     },
//   },
// }));
