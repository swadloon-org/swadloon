import { DesignSystem } from 'core-design-system';
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
  position: 'absolute',
  bottom: '0',
  right: '0',
  zIndex: 1,
}));
