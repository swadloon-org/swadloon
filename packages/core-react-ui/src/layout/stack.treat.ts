import { styleMap } from 'treat';

import { Theme } from '../design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',
    width: `100%`,
    gridTemplateColumns: '1fr',
    /**
     * we want Stack's childs to take the minimum space (their content size)
     */
    gridAutoRows: 'min-content',
    gap: `var(--mobile-gap, 0px)` as string,
    '@media': {
      [cssTheme.layout.media.tablet]: { gap: `var(--tablet-gap, 0px)` as string },
      [cssTheme.layout.media.desktopSmall]: { gap: `var(--desktop-gap, 0px)` as string },
    },
  },
}));
