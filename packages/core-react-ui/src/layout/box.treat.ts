import { TextAlignProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    textAlign: `var(--mobileTextAlign)` as TextAlignProperty,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        textAlign: `var(--tabletTextAlign)` as TextAlignProperty,
      },
      [cssTheme.layout.media.desktopSmall]: {
        textAlign: `var(--desktopTextAlign)` as TextAlignProperty,
      },
    },
  },
}));
