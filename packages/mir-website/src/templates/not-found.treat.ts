import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  minHeight: '80vh',
  backgroundColor: theme.colors.greyscale0,
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginBottom: '1em',
}));