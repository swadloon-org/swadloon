import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@media': {
    [theme.layout.media.tablet]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.layout.media.desktop]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
}));
