import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `var(${theme.sizing.sizeCSSVarNames.X5}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const type1reversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const type1default = style((theme: DesignSystem) => ({
  zIndex: 1,
}));

export const type2 = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X7}) ${theme.layout.contentMargins.MOBILE.valuePx}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      width: '100%',
      padding: `var(${theme.sizing.sizeCSSVarNames.X7}) 0`,
    },
  },
}));

export const type3 = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X6}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      width: '100%',
      padding: `var(${theme.sizing.sizeCSSVarNames.X7}) 0`,
    },
  },
}));

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

export const type4 = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X7}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const image = style((theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: '366px',
      height: '366px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '540px',
      height: '540px',

      selectors: {
        [`${type3} &`]: {
          width: '500px',
          height: '500px',
        },
        [`${type2} &`]: {
          width: '500px',
          height: '500px',
        },
      },
    },
  },
}));

export const imageTabs = style((theme: DesignSystem) => ({
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X3} * 2)`,
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X3} * 2)`,
  maxWidth: '400px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '460px',
      textAlign: 'left',

      selectors: {
        [`${type2} &`]: {
          textAlign: 'left',
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

      selectors: {
        [`${type2} &`]: {
          textAlign: 'left',
        },
      },
    },
  },
}));

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'center',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      selectors: {
        [`${type2} &`]: {
          alignSelf: 'flex-start',
        },
        [`${type3} &`]: {
          alignSelf: 'flex-start',
        },
      },
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      selectors: {
        [`${type2} &`]: {
          display: 'flex',
          flexDirection: 'column',
          aligntems: 'stretch',
          margin: 'auto auto auto 0',
        },
        [`${type3} &`]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          margin: 'auto 0 auto auto',
        },
      },
    },
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
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X3} * 2)`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      selectors: {
        [`${type3} &`]: {
          display: 'flex',
          marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
          maxWidth: '610px',
        },
      },
    },
  },
}));

export const extraPadding = style((theme: DesignSystem) => ({}));

globalStyle(`${type2} ~ ${type3} `, (theme: DesignSystem) => ({
  paddingTop: `var(${theme.sizing.sizeCSSVarNames.X5})`,
}));

globalStyle(`${type1reversed} > *`, (theme: DesignSystem) => ({
  maxWidth: '343px',
}));

globalStyle(`${type1default} > *`, (theme: DesignSystem) => ({
  maxWidth: '343px',
}));

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
