import { AlignContentProperty, JustifyContentProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'flex',
    // gridAutoFlow: 'column',

    alignItems: `var(--mobileAlignItems)` as AlignContentProperty,
    justifyContent: `var(--mobileJustifyContent)` as JustifyContentProperty,
    alignContent: 'center',

    '@media': {
      [`(min-width: 700px)`]: {
        alignItems: `var(--tabletAlignItems)` as AlignContentProperty,
        justifyContent: `var(--tabletJustifyContent)` as JustifyContentProperty,
        alignContent: 'center',
      },
      ['(min-width: 1200px)']: {
        alignItems: `var(--desktopAlignItems)` as AlignContentProperty,
        justifyContent: `var(--desktopJustifyContent)` as JustifyContentProperty,
        alignContent: 'center',
      },
    },
  },
}));
