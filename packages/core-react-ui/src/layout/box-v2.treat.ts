import { AlignContentProperty, JustifyContentProperty, JustifySelfProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'flex',
    position: 'relative',
    alignItems: 'var(--mobile-align-items)' as AlignContentProperty,
    justifyContent: 'var(--mobile-justify-content)' as JustifyContentProperty,
    justifySelf: 'var(--mobile-justify-self)' as JustifySelfProperty,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        alignItems: `var(--tablet-align-items)` as AlignContentProperty,
        justifyContent: `var(--tablet-justify-content)` as JustifyContentProperty,
        justifySelf: `var(--tablet-justify-self)` as JustifySelfProperty,
      },
      [cssTheme.layout.media.desktopSmall]: {
        alignItems: `var(--desktop-align-items)` as AlignContentProperty,
        justifyContent: `var(--desktop-justify-content)` as JustifyContentProperty,
        justifySelf: `var(--desktop-justify-self)` as JustifySelfProperty,
      },
    },
  },
}));
