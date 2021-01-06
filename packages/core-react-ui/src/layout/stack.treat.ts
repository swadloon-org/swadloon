import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: `var(--mobileGap)` as string,
    '@media': {
      [`(min-width: 700px)`]: { gap: `var(--tabletGap)` as string },
      ['(min-width: 1200px)']: { gap: `var(--desktopGap)` as string },
    },
  },
}));
