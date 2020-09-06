import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const type3 = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.MOBILE.valuePx}`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '1200px',
      width: '100%',
      padding: `${theme.sizing.sizes.x7} 0`,
      paddingTop: `0`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      // margin: 'auto 0 auto auto',
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

export const imageTabs = style((theme: DesignSystem) => ({
  marginBottom: `calc(${theme.sizing.sizes.x3} * 2)`,
}));

export const image = style((theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x5}`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx}) and (max-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '366px',
      height: '366px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: '535px',
      height: '535px',
      marginLeft: `auto`,
    },
  },
}));

export const alignContentRight = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      marginLeft: `${theme.sizing.sizes.x6}`,
    },
  },
}));

export const alignContentLeft = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      marginRight: `${theme.sizing.sizes.x6}`,
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginBottom: `calc(${theme.sizing.sizes.x3} *2)`,
  maxWidth: '400px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '500px',
      textAlign: 'left',
    },
  },
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `${theme.sizing.sizes.x5}`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '500px',
      textAlign: 'left',
    },
  },
}));

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'center',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      alignSelf: 'flex-start',
    },
  },
}));

export const tabsWrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  rowGap: `${theme.sizing.sizes.x1}`,
  marginBottom: `calc(${theme.sizing.sizes.x3} * 2)`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      display: 'flex',
      marginBottom: `${theme.sizing.sizes.x5}`,
      maxWidth: '650px',
    },
  },
}));
