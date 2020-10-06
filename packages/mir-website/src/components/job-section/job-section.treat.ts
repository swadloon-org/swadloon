import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

//
// wrapper
//
export const wrapper = style((theme: DesignSystem) => ({
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'stretch',
  // margin: `0 ${theme.layout.contentMargins.mobile.px}`,
  // padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale100,

  // '@media': {
  //   [theme.layout.media.tablet]: {
  //     margin: `0 ${theme.layout.contentMargins.tablet.px}`,
  //   },
  //   [theme.layout.media.desktop]: {
  //     maxWidth: '1200px',
  //     margin: '0 auto',
  //   },
  // },
}));
//
// container
//
export const containerWrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,
  '@media': {
    [theme.layout.media.tablet]: {
      margin: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
}));
//
// container
//
export const container = style((theme: DesignSystem) => ({}));

//
// container
//
export const containerBloc = style((theme: DesignSystem) => ({}));

//
// content
//
export const content = style((theme: DesignSystem) => ({
  paddingBottom: theme.sizing.sizes.x4,
  display: 'grid',
  gridColumn: '1',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      display: 'grid',
      gridColumn: '1',
      // gridGap: `0 ${theme.sizing.sizes.x4}`,
    },
    [theme.layout.media.desktop]: {
      display: 'grid',
      gridColumn: '1',
      gridTemplateColumns: 'repeat(3, 1fr)',
      // gridGap: `0 ${theme.sizing.sizes.x4}`,
      gridTemplateRows: 'repeat(4, 1fr)',
      gridAutoFlow: 'column',
    },
  },
}));

export const withTags = style((theme: DesignSystem) => ({
  gridGap: `${theme.sizing.sizes.x3} 0`,

  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridGap: `${theme.sizing.sizes.x3} ${theme.sizing.sizes.x4}`,
    },
    [theme.layout.media.desktop]: {
      gridGap: `${theme.sizing.sizes.x3} ${theme.sizing.sizes.x4}`,
    },
  },
}));

export const withCheck = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridGap: `0 ${theme.sizing.sizes.x4}`,
    },
    [theme.layout.media.desktop]: {
      gridGap: `0 ${theme.sizing.sizes.x4}`,
    },
  },
}));

//
// unselected
//
export const unselected = style((theme: DesignSystem) => ({
  visibility: 'hidden',
  height: '0',
  paddingBottom: '0',
}));
//
// selected
//
export const selected = style((theme: DesignSystem) => ({
  display: 'block',
}));

//
// accordions
//
export const accordions = style((theme: DesignSystem) => ({
  paddingBottom: `${theme.sizing.sizes.x4}`,
}));

//
// TODO - Faire Marcher les classes accordions et tags pour ajuster le padding
//
//
// tagsUnique
//
export const tagsUnique = style((theme: DesignSystem) => ({
  // paddingBottom: `${theme.sizing.sizes.x3}`,
}));

//
// title
//
export const title = style((theme: DesignSystem) => ({
  alignSelf: 'center',
  marginBottom: `${theme.sizing.sizes.x6}`,
  maxWidth: '400px',
  textAlign: 'center',
  '@media': {
    [theme.layout.media.tabletPlus]: {
      marginBottom: `${theme.sizing.sizes.x5}`,
      maxWidth: '500px',
    },
  },
}));

//
// even
//
export const even = style((theme: DesignSystem) => ({
  backgroundColor: 'none',
}));

//
// unenven
//
export const unenven = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscale0,
}));
