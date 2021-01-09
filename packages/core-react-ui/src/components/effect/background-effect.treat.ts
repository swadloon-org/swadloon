import { FilterProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {},
  normal: {
    filter: 'var(--mobile-filter)' as FilterProperty,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        filter: `var(--tablet-filter)` as FilterProperty,
      },
      [cssTheme.layout.media.desktopSmall]: {
        filter: `var(--desktop-filter)` as FilterProperty,
      },
    },
  },
  reversed: {
    filter: 'var(--mobile-filter)' as FilterProperty,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        filter: `var(--tablet-filter)` as FilterProperty,
      },
      [cssTheme.layout.media.desktopSmall]: {
        filter: `var(--desktop-filter)` as FilterProperty,
      },
    },
  },
}));
