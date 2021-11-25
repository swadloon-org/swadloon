import { Property } from 'csstype';
import { styleMap } from 'treat';

import { Theme } from '../design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'flex',
    position: 'relative',
    alignItems: 'var(--mobile-align-items)' as Property.AlignContent,
    justifyContent: 'var(--mobile-justify-content)' as Property.JustifyContent,
    justifySelf: 'var(--mobile-justify-self)' as Property.JustifySelf,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        alignItems: `var(--tablet-align-items)` as Property.AlignContent,
        justifyContent: `var(--tablet-justify-content)` as Property.JustifyContent,
        justifySelf: `var(--tablet-justify-self)` as Property.JustifySelf,
      },
      [cssTheme.layout.media.desktopSmall]: {
        alignItems: `var(--desktop-align-items)` as Property.AlignContent,
        justifyContent: `var(--desktop-justify-content)` as Property.JustifyContent,
        justifySelf: `var(--desktop-justify-self)` as Property.JustifySelf,
      },
    },
  },
}));
