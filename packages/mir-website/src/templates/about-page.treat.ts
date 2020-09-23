import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,
}));
