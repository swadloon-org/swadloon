import { DesignSystem } from '@newrade/core-design-system-old';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
  zIndex: 2,
}));

export const styleNormal = style((theme: DesignSystem) => ({
  zIndex: 1,
  boxShadow: theme.effects.shadows.light.css,
}));

export const styleReversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
  boxShadow: theme.effects.shadows.light.css,
}));

globalStyle(`${styleReversed} > *`, (theme: DesignSystem) => ({
  maxWidth: '343px',
}));

globalStyle(`${styleNormal} > *`, (theme: DesignSystem) => ({
  maxWidth: '343px',
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  margin: `${theme.sizing.sizes.x5} 0`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [theme.layout.media.desktop]: {
      maxWidth: '500px',
      textAlign: 'center',
    },
  },
}));
