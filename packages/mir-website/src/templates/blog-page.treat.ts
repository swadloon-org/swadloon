import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';
import { theme } from '../design-system';
import { Design } from '../pages/design';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,
}));
