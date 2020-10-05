import { DesignSystem } from 'core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  display: 'flex',
  zIndex: 0,
  padding: '55px 0 0 55px',
}));

export const imgPreview = style((theme: DesignSystem) => ({
  width: '270px',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: -1,
  backgroundColor: theme.colors.greyscale100,
}));

export const tilePreview = style((theme: DesignSystem) => ({
  zIndex: 1,
}));
