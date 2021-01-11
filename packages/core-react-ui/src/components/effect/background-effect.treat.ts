import { BackgroundPositionProperty, FilterProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {},
  imgWrapper: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  img: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  normal: {
    filter: 'var(--mobile-filter)' as FilterProperty,
    backgroundPosition: 'var(--mobile-background-position)' as BackgroundPositionProperty<any>,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        filter: `var(--tablet-filter)` as FilterProperty,
        backgroundPosition: 'var(--tablet-background-position)' as BackgroundPositionProperty<any>,
      },
      [cssTheme.layout.media.desktopSmall]: {
        filter: `var(--desktop-filter)` as FilterProperty,
        backgroundPosition: 'var(--desktop-background-position)' as BackgroundPositionProperty<any>,
      },
    },
  },
  reversed: {
    filter: 'var(--mobile-filter)' as FilterProperty,
    backgroundPosition: 'var(--mobile-background-position)' as BackgroundPositionProperty<any>,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        filter: `var(--tablet-filter)` as FilterProperty,
        backgroundPosition: 'var(--tablet-background-position)' as BackgroundPositionProperty<any>,
      },
      [cssTheme.layout.media.desktopSmall]: {
        filter: `var(--desktop-filter)` as FilterProperty,
        backgroundPosition: 'var(--desktop-background-position)' as BackgroundPositionProperty<any>,
      },
    },
  },
}));
