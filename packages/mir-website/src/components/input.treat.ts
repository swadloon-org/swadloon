import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.x2}) var(${theme.sizing.sizeCSSVarNames.x2})`,
  ':focus': {
    outline: 'none',
  },
}));

export const Default = style((theme: DesignSystem) => ({
  border: '0px',
  borderRadius: 0,
  borderBottom: `solid 1px ${theme.colors.greyscale1000}`,
  backgroundColor: theme.colors.greyscale100,
  color: theme.colors.greyscale900,
  '::placeholder': {
    color: theme.colors.greyscale600,
  },
}));

export const reversed = style((theme: DesignSystem) => ({
  border: '0px',
  borderRadius: 0,
  borderBottom: `solid 1px ${theme.colors.greyscale0Reversed}`,
  backgroundColor: theme.colors.effectTransparentLight,
  color: theme.colors.greyscale0Reversed,
  '::placeholder': {
    color: theme.colors.greyscale500,
  },
}));
