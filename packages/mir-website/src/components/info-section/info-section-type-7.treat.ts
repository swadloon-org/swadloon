import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridColumnGap: `${theme.sizing.sizes.x2}`,
    },
  },
}));
