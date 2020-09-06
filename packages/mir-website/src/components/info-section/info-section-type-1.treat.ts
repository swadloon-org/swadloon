import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const type1reversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
  boxShadow: '0px 2px 10px rgba(155, 155, 155, 0.5)',
}));

export const type1default = style((theme: DesignSystem) => ({
  zIndex: 1,
  boxShadow: '0px 2px 10px rgba(155, 155, 155, 0.5)',
}));

globalStyle(`${type1reversed} > *`, (theme: DesignSystem) => ({
  maxWidth: '343px',
}));

globalStyle(`${type1default} > *`, (theme: DesignSystem) => ({
  maxWidth: '343px',
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  whiteSpace: 'pre-wrap', // handle mutli-line text
  marginBottom: `${theme.sizing.sizes.x5}`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '500px',
      textAlign: 'center',
    },
  },
}));
