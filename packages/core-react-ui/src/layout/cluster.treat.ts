import { AlignContentProperty, JustifyContentProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',
    gridAutoFlow: 'column',
    height: '100%',
    alignItems: 'var(--mobile-align-items)' as AlignContentProperty,
    justifyContent: 'var(--mobile-justify-content)' as JustifyContentProperty,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        alignItems: `var(--tablet-align-items)` as AlignContentProperty,
        justifyContent: `var(--tablet-justify-content)` as JustifyContentProperty,
      },
      [cssTheme.layout.media.desktopSmall]: {
        alignItems: `var(--desktop-align-items)` as AlignContentProperty,
        justifyContent: `var(--desktop-justify-content)` as JustifyContentProperty,
      },
    },
  },
}));
