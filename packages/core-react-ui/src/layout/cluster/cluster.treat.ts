import { JustifyContentProperty } from 'csstype';
import { styleMap } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  wrapper: {
    display: 'grid',
    gridAutoFlow: 'column',

    alignItems: `center`,
    justifyContent: `var(--mobileJustifyContent)` as JustifyContentProperty,
    alignContent: 'center',

    '@media': {
      [`(min-width: 700px)`]: {
        alignItems: `center`,
        justifyContent: `var(--tabletJustifyContent)` as JustifyContentProperty,
        alignContent: 'center',
      },
      ['(min-width: 1200px)']: {
        alignItems: `center`,
        justifyContent: `var(--desktopJustifyContent)` as JustifyContentProperty,
        alignContent: 'center',
      },
    },
  },
}));
