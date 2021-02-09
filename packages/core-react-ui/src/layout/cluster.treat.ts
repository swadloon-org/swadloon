import { Property } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',
    gridAutoFlow: 'column',
    height: '100%',
    alignItems: 'var(--mobile-align-items)' as Property.AlignContent,
    justifyContent: 'var(--mobile-justify-content)' as Property.JustifyContent,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        alignItems: `var(--tablet-align-items)` as Property.AlignContent,
        justifyContent: `var(--tablet-justify-content)` as Property.JustifyContent,
      },
      [cssTheme.layout.media.desktopSmall]: {
        alignItems: `var(--desktop-align-items)` as Property.AlignContent,
        justifyContent: `var(--desktop-justify-content)` as Property.JustifyContent,
      },
    },
  },
}));
