import { Property } from 'csstype';
import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    display: 'grid',
    gridAutoFlow: 'column',
    height: '100%',
    gap: 'var(--mobile-gap)' as Property.Gap,
    alignItems: 'var(--mobile-align-items)' as Property.AlignContent,
    justifyContent: 'var(--mobile-justify-content)' as Property.JustifyContent,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        gap: 'var(--tablet-gap)' as Property.Gap,
        alignItems: `var(--tablet-align-items)` as Property.AlignContent,
        justifyContent: `var(--tablet-justify-content)` as Property.JustifyContent,
      },
      [cssTheme.layout.media.desktopSmall]: {
        gap: 'var(--desktop-gap)' as Property.Gap,
        alignItems: `var(--desktop-align-items)` as Property.AlignContent,
        justifyContent: `var(--desktop-justify-content)` as Property.JustifyContent,
      },
    },
  })),
  wrap: style(({ cssTheme, theme }: Theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
  })),
};
