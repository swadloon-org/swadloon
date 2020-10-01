import { DesignSystem, createShadow } from 'core-design-system';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,
}));

export const container = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const formWrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  padding: theme.layout.contentMargins.mobile.px,
  display: `flex`,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.greyscale100,
  '@media': {
    [theme.layout.media.tablet]: {
      padding: theme.sizing.sizes.x6,
    },
    [theme.layout.media.desktop]: {
      padding: theme.sizing.sizes.x7,
    },
  },
}));

export const form = style((theme: DesignSystem) => ({
  position: 'relative',
  display: `grid`,
  gridGap: theme.sizing.sizes.x3,
  padding: theme.sizing.sizes.x5,
  width: '100%',
  maxWidth: `450px`,

  backgroundColor: theme.colors.greyscale0,
  boxShadow: createShadow({
    ...theme.effects.shadows.heavy,
  }).css,

  '@media': {
    [theme.layout.media.tabletPlus]: {
      maxWidth: `900px`,
    },
  },
}));

export const formRow = style((theme: DesignSystem) => ({
  display: `grid`,
  gridTemplateColumns: `1fr`,
  gridGap: theme.sizing.sizes.x3,
  width: '100%',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridTemplateColumns: `1fr 1fr`,
    },
  },
}));

export const textArea = style((theme: DesignSystem) => ({
  height: '200px',
}));

export const title = style((theme: DesignSystem) => ({
  marginBottom: theme.sizing.sizes.x4,
  textAlign: 'center',
}));
