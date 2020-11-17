import { TextAlignProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    textAlign: `var(--mobileTextAlign)` as TextAlignProperty,
    '@media': {
      [`(min-width: 700px)`]: {
        textAlign: `var(--tabletTextAlign)` as TextAlignProperty,
      },
      ['(min-width: 1200px)']: {
        textAlign: `var(--desktopTextAlign)` as TextAlignProperty,
      },
    },
  },
}));
