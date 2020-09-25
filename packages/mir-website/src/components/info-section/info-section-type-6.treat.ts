import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

//
// wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.mobile.px}`,
  textAlign: 'center',
}));

//
// type6Primary
//

export const type6Primary = style((theme: DesignSystem) => ({
  width: '100%',
  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

//
// type6Secondary
//

export const type6Secondary = style((theme: DesignSystem) => ({
  width: '100%',
  backgroundColor: theme.colors.greyscale0,
}));

//
// type6Tertiary
//

export const type6Tertiary = style((theme: DesignSystem) => ({
  width: '100%',
  backgroundColor: theme.colors.greyscale100,
}));

//
// illustration
//

export const illustration = style((theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x5}`,
}));

globalStyle(`${type6Primary} ${illustration} path`, (theme: DesignSystem) => ({
  fill: 'currentColor',
}));

globalStyle(` ${illustration} path`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));

//
// title
//

export const title = style((theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x5}`,
}));

//
// text
//

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `${theme.sizing.sizes.x5}`,
  color: 'currentColor',

  maxWidth: '400px',

  '@media': {
    [theme.layout.media.desktop]: {
      textAlign: 'center',
      maxWidth: '500px',
    },
  },
}));
