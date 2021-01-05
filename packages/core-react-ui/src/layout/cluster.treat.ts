import { AlignContentProperty, JustifyContentProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: `var(--mobileAlignItems)` as AlignContentProperty,
    justifyContent: `var(--mobileJustifyContent)` as JustifyContentProperty,

    '@media': {
      [`(min-width: 700px)`]: {
        alignItems: `var(--tabletAlignItems)` as AlignContentProperty,
        justifyContent: `var(--tabletJustifyContent)` as JustifyContentProperty,
      },
      ['(min-width: 1200px)']: {
        alignItems: `var(--desktopAlignItems)` as AlignContentProperty,
        justifyContent: `var(--desktopJustifyContent)` as JustifyContentProperty,
      },
    },
  },
}));
