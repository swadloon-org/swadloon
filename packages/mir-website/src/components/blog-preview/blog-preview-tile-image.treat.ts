import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  zIndex: 0,
  '@media': {
    [theme.layout.media.tabletPlus]: {
      width: '100%',
    },
  },
}));

export const imgPreview = style((theme: DesignSystem) => ({
  width: '100%',
  height: '200px',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: -1,
  backgroundColor: theme.colors.greyscale100,
}));

export const wrapperBig = style((theme: DesignSystem) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  minHeight: '200px',
  zIndex: 0,
  '@media': {
    [theme.layout.media.tabletPlus]: {
      minHeight: '500px',
    },
  },
}));

export const imgPreviewBig = style((theme: DesignSystem) => ({
  width: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: -1,
  backgroundColor: theme.colors.greyscale100,
}));

export const tilePreview = style((theme: DesignSystem) => ({
  position: 'absolute',
  top: '35px',
  left: '35px',
  zIndex: 1,
}));
