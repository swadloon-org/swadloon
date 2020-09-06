import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  justifyContent: 'space-between',
  padding: `${theme.sizing.sizes.x5} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const AlignContentLeft = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      margin: '0 auto',
    },
  },
}));

export const AlignContentRight = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
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
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      width: '540px',
      height: '540px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      width: '366px',
      height: '366px',
    },
  },
}));

export const type5 = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '1200px',
      width: '100%',
      padding: `${theme.sizing.sizes.x7} 0`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  maxWidth: '500px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: `${theme.sizing.sizes.x6}`,
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginBottom: `calc(${theme.sizing.sizes.x3} *2)`,
  maxWidth: '400px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '500px',
      textAlign: 'left',
    },
  },
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `${theme.sizing.sizes.x4}`,
  color: 'currentColor',
  maxWidth: '450px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '500px',
      textAlign: 'left',
    },
  },
}));
