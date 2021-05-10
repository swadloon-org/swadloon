import { styleMap } from 'treat';
import { Theme } from '../design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',

    gridTemplateColumns: `repeat(var(--mobileCol), 1fr)`,
    gap: `var(--mobile-gap)`,

    '@media': {
      [cssTheme.layout.media.tablet]: {
        gap: `var(--tablet-gap)`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gap: `var(--desktop-gap)`,
      },
    },
  },
  rows: {
    gridTemplateRows: `repeat(var(--mobileRows), 1fr)`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateRows: `repeat(var(--tabletRows), 1fr)`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateRows: `repeat(var(--desktopRows), 1fr)`,
      },
    },
  },
  col: {
    gridTemplateColumns: `repeat(var(--mobileCol), 1fr)`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: `repeat(var(--tabletCol), 1fr)`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: `repeat(var(--desktopCol), 1fr)`,
      },
    },
  },
}));
