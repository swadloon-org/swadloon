import { style } from '@vanilla-extract/css';

import { layoutCSS } from '../default-theme/src/theme';

export const wrapper = style({
  display: 'grid',

  gridTemplateColumns: `repeat(var(--mobileCol), 1fr)`,
  gap: `var(--mobile-gap)`,

  '@media': {
    [layoutCSS.media.tablet]: {
      gap: `var(--tablet-gap)`,
    },
    [layoutCSS.media.desktopSmall]: {
      gap: `var(--desktop-gap)`,
    },
  },
});

export const rows = style({
  gridTemplateRows: `repeat(var(--mobileRows), 1fr)`,
  '@media': {
    [layoutCSS.media.tablet]: {
      gridTemplateRows: `repeat(var(--tabletRows), 1fr)`,
    },
    [layoutCSS.media.desktopSmall]: {
      gridTemplateRows: `repeat(var(--desktopRows), 1fr)`,
    },
  },
});

export const col = style({
  gridTemplateColumns: `repeat(var(--mobileCol), 1fr)`,
  '@media': {
    [layoutCSS.media.tablet]: {
      gridTemplateColumns: `repeat(var(--tabletCol), 1fr)`,
    },
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: `repeat(var(--desktopCol), 1fr)`,
    },
  },
});
