import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  justifyItems: 'center',

  '@media': {
    [theme.layout.media.desktop]: {
      justifyItems: 'flex-start',
    },
  },
}));
