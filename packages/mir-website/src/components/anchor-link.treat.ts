import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  textDecoration: `underline`,

  cursor: 'pointer',
  ':visited': {
    color: theme.colors.greyscale0Reversed,
  },
}));
