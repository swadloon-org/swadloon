import { DesignSystem } from 'core-design-system';
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
  zIndex: 0,
  backgroundColor: theme.colors.greyscale0,
}));

export const form = style((theme: DesignSystem) => ({
  position: 'relative',
}));
