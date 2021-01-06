import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',
    '--containerCol': 1,
    '--mobileCol': 1,
    '--tabletCol': 1,
    '--desktopCol': 1,
    gridTemplateColumns: `repeat(var(--mobileCol), 1fr)`,
  },
  viewport: {
    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: `repeat(var(--tabletCol), 1fr)`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: `repeat(var(--desktopCol), 1fr)`,
      },
    },
  },
  container: {
    gridTemplateColumns: `repeat(var(--containerCol), 1fr)`,
  },
}));
