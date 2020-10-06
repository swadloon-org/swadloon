import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  width: '100%',
  borderRadius: '23px',
  boxShadow: theme.effects.shadows.light.css,
  backgroundColor: theme.colors.greyscale0,
}));

export const container = style((theme: DesignSystem) => ({
  width: 'fit-content',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const number = style((theme: DesignSystem) => ({
  position: 'absolute',
  color: theme.colors.greyscale0,
}));
export const illustration = style((theme: DesignSystem) => ({
  height: `calc(${theme.sizing.sizes.x1} * 5)`,
  width: `calc(${theme.sizing.sizes.x1} * 5)`,
}));

export const content = style((theme: DesignSystem) => ({
  padding: `0 ${theme.sizing.sizes.x2}`,
}));
export const label = style((theme: DesignSystem) => ({
  height: `calc(${theme.sizing.sizes.x1} * 5)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
