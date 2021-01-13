import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  gridTemplateColumns: `1fr`,
  gap: `var(--mobile-gap)`,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      gap: `var(--tablet-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
    },
    [cssTheme.layout.media.desktopSmall]: {
      gap: `var(--desktop-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
    },
  },
}));
