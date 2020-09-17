import { DesignSystem, createShadow } from 'core-design-system';
import { globalStyle, style } from 'treat';
import { theme } from '../../design-system';

export const wrapper = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x5} 0`,
  backgroundColor: theme.colors.greyscale100,
}));
export const container = style((theme: DesignSystem) => ({
  maxWidth: '1200px',
  margin: '0 auto',

  '@media': {
    [theme.layout.media.desktop]: {},
  },
}));

export const Default = style((theme: DesignSystem) => ({}));

export const Blue = style((theme: DesignSystem) => ({}));

export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  margin: '0 auto',
  paddingBottom: `${theme.sizing.sizes.x5}`,

  '@media': {
    [theme.layout.media.desktop]: {},
  },
}));
export const content = style((theme: DesignSystem) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  gridColumn: '1',
  gridGap: `${theme.sizing.sizes.x4}`,
  margin: '0 auto',
  flexDirection: 'column',
  width: 'fit-content',

  '@media': {
    [theme.layout.media.desktop]: {
      justifyContent: 'center',
      flexDirection: 'row',
      gridGap: `0 ${theme.sizing.sizes.x2}`,
      margin: `${theme.layout.contentMargins.tablet.px} auto`,
    },
  },
}));

export const tileProcess = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.mobile]: {
      maxWidth: ' 450px',
      display: 'grid',
      gridTemplateAreas: `'circle text'`,
    },
    [theme.layout.media.tablet]: {
      maxWidth: ' 450px',
      display: 'grid',
      gridTemplateAreas: `'circle text'`,
    },
    [theme.layout.media.desktop]: {
      marginRight: theme.sizing.sizes.x2,
      selectors: {
        '&:last-child': {
          marginRight: 0,
        },
      },
    },
  },
}));

export const blocNumber = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyContent: 'flex-start',
  paddingRight: `${theme.sizing.sizes.x4}`,
  gridArea: 'circle',

  '@media': {
    [theme.layout.media.desktop]: {
      gridArea: 'none',
      justifyContent: 'center',
      paddingRight: '0',
      paddingBottom: `${theme.sizing.sizes.x4}`,
    },
  },
}));

export const circle = style((theme: DesignSystem) => ({
  position: 'relative',
  display: 'grid',
  textAlign: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',

  boxShadow: createShadow({
    ...theme.effects.shadows.medium,
    offsetX: 3,
    offsetY: 3,
  }).css,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.primary500,

  '@media': {
    [theme.layout.media.desktop]: {
      selectors: {
        [`&:before`]: {
          position: 'absolute',
          content: `' '`,
          top: '25px',
          left: '100%',
          right: 'auto',
          borderRight: '1px solid black',
          width: `${250 - 50}px`,
          height: '3px',
          backgroundColor: 'white',
        },
      },
    },
  },
}));

globalStyle(`${tileProcess}:last-child ${circle}:before`, (theme: DesignSystem) => ({
  visibility: 'hidden',
}));

export const number = style((theme: DesignSystem) => ({
  alignSelf: 'center',
  '@media': {
    [theme.layout.media.desktop]: {},
  },
}));

export const blocContent = style((theme: DesignSystem) => ({
  textAlign: 'left',
  display: 'grid',
  gridColumn: '1',
  gridArea: 'text',
  justifyContent: 'flex-start',
  minWidth: '150px',
  maxWidth: '250px',
  alignItems: 'center',

  '@media': {
    [theme.layout.media.desktop]: {
      gridGap: `${theme.sizing.sizes.x3}`,
      textAlign: 'center',
      justifyContent: 'center',

      selectors: {
        [`${Blue} &`]: {
          color: theme.colors.primary500,
        },
      },
    },
  },
}));

// export const line = style((theme: DesignSystem) => ({
//   position: 'absolute',
//   zIndex: -1,
//   border: `3px solid ${theme.colors.greyscale0}`,
//   backgroundColor: theme.colors.greyscale0,
//   width: '0',
//   top: '25px',
//   left: '22px',
//   height: '90%',

//   '@media': {
//     [theme.layout.media.desktop]: {
//       width: `calc(100% - 100px - (${theme.sizing.sizes.x2}*2))`,
//       height: '0',
//       left: 'auto',
//       right: 'auto',
//     },
//   },

//   selectors: {
//     [`${blocContent} &`]: {
//       alignSelf: 'center',
//     },
//   },
// }));

export const contentBlue = style((theme: DesignSystem) => ({
  color: theme.colors.primary500,
}));
