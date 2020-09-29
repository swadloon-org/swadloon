import { DesignSystem } from 'core-design-system';
import { style } from 'treat';
import { theme } from '../design-system';

export const sidebar = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'none',
    },
  },
}));

export const close = style((theme: DesignSystem) => ({
  position: 'initial',
}));
export const open = style((theme: DesignSystem) => ({
  position: 'fixed',
  top: '0',
  left: '0',
}));
