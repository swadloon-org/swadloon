import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  display: 'flex',
}));

export const backgroundIllustration = style((theme: DesignSystem) => ({
  position: 'absolute',
  transform: 'translate(-15%, -15%)',
  zIndex: 0,
  top: '0',
  left: '0',
  height: '120%',
  width: '120%',
  overflow: 'visible',
}));

globalStyle(`${backgroundIllustration} path`, {
  width: '100%',
});

export const content = style((theme: DesignSystem) => ({
  zIndex: 1,
  height: '100%',
  width: '100%',
}));

export const image = style((theme: DesignSystem) => ({
  backgroundSize: 'cover',
  minHeight: '215px',
  minWidth: '215px',
  height: '100%',
  width: '100%',
}));

export const bottomRight = style((theme: DesignSystem) => ({}));

export const bottomLeft = style((theme: DesignSystem) => ({}));
