import { DesignSystem } from 'core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  backgroundColor: theme.colors.greyscale100,
}));

export const container = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: `${theme.sizing.sizes.x4} 0`,
  margin: '0 auto',
  paddingBottom: theme.sizing.sizes.x7,
  paddingTop: theme.sizing.sizes.x7,

  '@media': {
    [theme.layout.media.desktop]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridGap: `0 ${theme.sizing.sizes.x4} `,
      maxWidth: '1200px',
    },
  },
}));
