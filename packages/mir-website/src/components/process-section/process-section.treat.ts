import { DesignSystem, createShadow } from 'core-design-system';
import { style } from 'treat';

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

export const blue = style((theme: DesignSystem) => ({}));

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
  display: 'grid',
  gridColumn: '1',
  gridTemplateColumns: '1fr',
  gridGap: `${theme.sizing.sizes.x4}`,
  margin: '0 auto',
  width: 'fit-content',
  '@media': {
    [theme.layout.media.desktop]: {
      justifyContent: 'center',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: `0 ${theme.sizing.sizes.x2}`,
      margin: `${theme.layout.contentMargins.tablet.px} 0`,
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
    [theme.layout.media.desktop]: {},
  },
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
  '@media': {
    [theme.layout.media.desktop]: {
      gridGap: `${theme.sizing.sizes.x3}`,
      textAlign: 'center',
    },
  },
  selectors: {
    [`${blue} &`]: {
      color: theme.colors.primary500,
    },
  },
}));

export const line = style((theme: DesignSystem) => ({
  position: 'absolute',
  zIndex: -1,
  border: `3px solid ${theme.colors.greyscale0}`,
  backgroundColor: theme.colors.greyscale0,
  width: '0',
  top: '25px',
  left: '22px',
  height: '90%',

  '@media': {
    [theme.layout.media.desktop]: {
      width: '80%',
      left: '10%',
      height: '0',
    },
  },

  selectors: {
    [`${blocContent} &`]: {
      alignSelf: 'center',
    },
  },
}));
