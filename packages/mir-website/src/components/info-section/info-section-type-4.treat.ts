import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `${theme.sizing.sizes.x5} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const type4Primary = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const type4Secondary = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const infoTilesWrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  gridAutoFlow: 'row',
  marginBottom: `${theme.sizing.sizes.x6}`,
  gridGap: `${theme.sizing.sizes.x4} 0 `,

  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridAutoFlow: 'column',
      gridGap: `0 ${theme.sizing.sizes.x4}`,
    },
  },
}));

export const infoTile = style((theme: DesignSystem) => ({
  marginRight: 0,
  marginBottom: `${theme.sizing.sizes.x4}`,
  '@media': {
    [theme.layout.media.desktop]: {
      marginRight: `${theme.sizing.sizes.x4}`,
      marginBottom: 0,
      ':last-child': {
        marginRight: 0,
      },
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
    [theme.layout.media.desktop]: {
      maxWidth: '500px',
      textAlign: 'center',
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  marginBottom: `calc(${theme.sizing.sizes.x3} *2)`,
  textAlign: 'center',
  maxWidth: '400px',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      textAlign: 'center',
    },
    [theme.layout.media.desktop]: {
      maxWidth: '500px',
      textAlign: 'center',
    },
  },
}));

export const extraPadding = style((theme: DesignSystem) => ({}));

export const image = style((theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x5}`,
  '@media': {
    [theme.layout.media.tablet]: {
      width: '366px',
      height: '366px',
    },
    [theme.layout.media.desktop]: {
      width: '540px',
      height: '540px',
    },
  },
}));

export const container = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: `${theme.sizing.sizes.x4} 0`,
  margin: '0 auto',
  paddingBottom: theme.sizing.sizes.x7,
  paddingTop: theme.sizing.sizes.x7,

  '@media': {
    [theme.layout.media.desktop]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridGap: `0 ${theme.sizing.sizes.x4} `,
      maxWidth: '1200px',
    },
  },
}));
export const wrapper2 = style((theme: DesignSystem) => ({
  display: 'grid',
  backgroundColor: theme.colors.greyscale100,
  padding: 0,
}));
