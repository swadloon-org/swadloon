import { createShadow, DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

//
// wrapper
//

export const wrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  zIndex: 0,
  backgroundColor: theme.colors.greyscale0,
}));

//
// container wrapping the content and the containerTitle
//

export const container = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

//
// container of the Heading and Paragraph
//

export const containerTitle = style((theme: DesignSystem) => ({
  maxWidth: '500px',
  textAlign: 'center',
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,
  zIndex: 2,
  paddingTop: theme.sizing.sizes.x6,
  color: theme.colors.greyscale0Reversed,
  '@media': {
    [theme.layout.media.tablet]: {},

    [theme.layout.media.desktop]: {
      maxWidth: '600px',
    },
  },
}));

//
// title of the section
//
export const title = style((theme: DesignSystem) => ({
  paddingBottom: theme.sizing.sizes.x5,
}));

//
// content of the video
//

export const content = style((theme: DesignSystem) => ({
  display: 'flex',
  paddingTop: theme.sizing.sizes.x6,
  paddingBottom: theme.sizing.sizes.x5,
  justifyContent: 'center',
  width: '100%',

  '@media': {
    [theme.layout.media.tablet]: {},

    [theme.layout.media.desktop]: {},
  },
}));

export const video = style((theme: DesignSystem) => ({
  width: '80%',
  height: '100%',

  boxShadow: createShadow({
    ...theme.effects.shadows.heavy,
  }).css,
  '@media': {
    [theme.layout.media.tablet]: {
      width: '65%',
      height: '100%',
    },

    [theme.layout.media.desktop]: {
      width: '50%',
      height: '100%',
    },
  },
}));

//
// color background at 65% of the total height
//

export const blue = style((theme: DesignSystem) => ({
  position: 'absolute',
  backgroundColor: theme.colors.primary500,
  width: '100%',
  height: '75%',
  top: 0,
  zIndex: -1,

  '@media': {
    [theme.layout.media.tablet]: {
      height: '65%',
    },

    [theme.layout.media.desktop]: {
      height: '65%',
    },
  },
}));
