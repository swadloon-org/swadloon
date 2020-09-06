import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      margin: `0 ${theme.layout.contentMargins.tablet.px}`,
    },

    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
}));

export const container = style((theme: DesignSystem) => ({}));

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      display: 'grid',
      gridColumn: '1',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: `0 ${theme.sizing.sizes.x4}`,
    },

    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {},
  },
}));

export const accordions = style((theme: DesignSystem) => ({
  paddingBottom: `${theme.sizing.sizes.x4}`,
}));

//
// TODO - Faire Marcher les classes accordions et tags pour ajuster le padding
//

export const tagsUnique = style((theme: DesignSystem) => ({
  paddingBottom: `${theme.sizing.sizes.x3}`,
}));

export const title = style((theme: DesignSystem) => ({
  alignSelf: 'center',
  marginBottom: `${theme.sizing.sizes.x6}`,
  maxWidth: '400px',
  textAlign: 'center',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      marginBottom: `${theme.sizing.sizes.x5}`,
      maxWidth: '500px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '500px',
    },
  },
}));

export const containerBox = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: `${theme.sizing.sizes.x5}`,
}));

export const boxIcon = style((theme: DesignSystem) => ({}));
export const even = style((theme: DesignSystem) => ({}));
export const unenven = style((theme: DesignSystem) => ({}));
