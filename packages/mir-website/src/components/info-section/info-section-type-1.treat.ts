import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',
  padding: `var(${theme.sizing.sizeCSSVarNames.X5}) ${theme.layout.contentMargins.MOBILE.valuePx}`,
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale900,
}));

export const type1reversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const type1default = style((theme: DesignSystem) => ({
  zIndex: 1,
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
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X5})`,
  color: 'currentColor',
  maxWidth: '400px',

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      maxWidth: '460px',
      textAlign: 'center',
    },
  },
}));
