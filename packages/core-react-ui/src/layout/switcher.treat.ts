import { AlignContentProperty, JustifyContentProperty, JustifySelfProperty } from 'csstype';
import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  gridTemplateColumns: `1fr`,
  gap: `var(--mobile-gap)`,
  alignItems: 'var(--mobile-align-items)' as AlignContentProperty,
  justifyContent: 'var(--mobile-justify-content)' as JustifyContentProperty,
  justifySelf: 'var(--mobile-justify-self)' as JustifySelfProperty,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      gap: `var(--tablet-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
      alignItems: `var(--tablet-align-items)` as AlignContentProperty,
      justifyContent: `var(--tablet-justify-content)` as JustifyContentProperty,
      justifySelf: `var(--tablet-justify-self)` as JustifySelfProperty,
    },
    [cssTheme.layout.media.desktopSmall]: {
      gap: `var(--desktop-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
      alignItems: `var(--desktop-align-items)` as AlignContentProperty,
      justifyContent: `var(--desktop-justify-content)` as JustifyContentProperty,
      justifySelf: `var(--desktop-justify-self)` as JustifySelfProperty,
    },
  },
}));
