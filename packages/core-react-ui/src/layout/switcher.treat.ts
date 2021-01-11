import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  gridTemplateColumns: `1fr`,
  gap: `1em`,

  '@media': {
    [cssTheme.layout.media.tablet]: {
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
    },
    [cssTheme.layout.media.desktopSmall]: {
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
    },
  },
}));
