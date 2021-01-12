import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    /**
     * we want Stack's childs to take the minimum space (their content size)
     */
    gridAutoRows: 'min-content',
    gap: `var(--mobileGap)` as string,
    '@media': {
      [cssTheme.layout.media.tablet]: { gap: `var(--tabletGap)` as string },
      [cssTheme.layout.media.desktopSmall]: { gap: `var(--desktopGap)` as string },
    },
  },
}));
