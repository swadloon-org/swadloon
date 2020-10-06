import { DesignSystem } from '@newrade/core-design-system-old';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'block',
  width: 'fit-content',
  backgroundColor: theme.colors.greyscaleTransparent,
  color: theme.colors.greyscale1000,
  touchAction: 'manipulation',
  cursor: 'pointer',
}));

globalStyle(`${wrapper} *`, {
  cursor: 'pointer',
  userSelect: 'none',
  whiteSpace: 'nowrap',
});

export const small = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x2}`,
}));

export const selected = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));
export const unselected = style((theme: DesignSystem) => ({}));
