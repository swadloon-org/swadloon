import { Property } from 'csstype';
import { style } from 'treat';
import { Theme } from '../design-system';

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  width: `100%`,
  gridTemplateColumns: `1fr`,
  ['--switcher-columns']: `var(--mobile-col)`,
  gap: `var(--mobile-gap)`,
  alignItems: 'var(--mobile-align-items)' as Property.AlignContent,
  justifyContent: 'var(--mobile-justify-content)' as Property.JustifyContent,
  justifySelf: 'var(--mobile-justify-self)' as Property.JustifySelf,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      ['--switcher-columns']: `var(--tablet-col)`,
      gap: `var(--tablet-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
      alignItems: `var(--tablet-align-items)` as Property.AlignContent,
      justifyContent: `var(--tablet-justify-content)` as Property.JustifyContent,
      justifySelf: `var(--tablet-justify-self)` as Property.JustifySelf,
    },
    [cssTheme.layout.media.desktopSmall]: {
      ['--switcher-columns']: `var(--desktop-col)`,
      gap: `var(--desktop-gap)`,
      gridTemplateColumns: `repeat(var(--switcher-columns, 2), 1fr)`,
      alignItems: `var(--desktop-align-items)` as Property.AlignContent,
      justifyContent: `var(--desktop-justify-content)` as Property.JustifyContent,
      justifySelf: `var(--desktop-justify-self)` as Property.JustifySelf,
    },
  },
}));
