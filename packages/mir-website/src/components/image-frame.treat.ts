import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  display: 'flex',

  height: '237px',
  width: '237px',
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      width: '370px',
      height: '370px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      width: '500px',
      height: '500px',
    },
  },
}));

export const backgroundIllustration = style((theme: DesignSystem) => ({
  position: 'absolute',
  // transform: 'translate(-15%, -15%)',
  zIndex: 0,
  height: '90%',
  width: '90%',
  overflow: 'visible',
}));

globalStyle(`${backgroundIllustration} path`, {
  width: '100%',
});

export const content = style((theme: DesignSystem) => ({
  zIndex: 1,
  height: '90%',
  width: '90%',
  position: 'absolute',
}));

export const image = style((theme: DesignSystem) => ({
  backgroundSize: 'cover',
  minHeight: '215px',
  minWidth: '215px',
  width: '100%',
  height: '100%',
}));

export const bottomRight = style((theme: DesignSystem) => ({
  bottom: '0',
  right: '0',
}));

export const bottomLeft = style((theme: DesignSystem) => ({
  bottom: '0',
  left: '0',
}));

export const topLeft = style((theme: DesignSystem) => ({
  top: '0',
  left: '0',
}));

export const topRight = style((theme: DesignSystem) => ({
  top: '0',
  right: '0',
}));
