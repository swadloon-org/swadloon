import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

export const sidebar = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'none',
    },
  },
}));
