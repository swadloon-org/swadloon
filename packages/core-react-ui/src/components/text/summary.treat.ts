import { globalStyle, style } from 'treat';
import { Theme } from '../../design-system/css-design-system';
import { getCSSColor } from '../../utilities/colors.utilities';
import { getCSSFilterColor } from '../../utilities/filter-color.utility';

const iconSize = `2em`;

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => {
    const iconColorClosed = getCSSFilterColor(theme.colors.colors.grey[600]);
    const iconColorOpened = getCSSFilterColor(theme.colors.colors.grey[900]);

    return {
      display: `flex`,
      position: `relative`,
      userSelect: `none`,

      listStyleImage: `none`,
      padding: `calc(${cssTheme.sizing.var.x3} * 2) 0`,
      paddingRight: `2em`,
      borderTop: `1px solid ${cssTheme.colors.colors.grey[50]}`,

      cursor: `pointer`,
      ':hover': {
        backgroundColor: getCSSColor({ h: 222, s: 0, l: 10, a: 5 }),
      },
      ':focus': {
        outline: `none`,
      },

      '::before': {
        content: `var(--icon-closed)`,
        position: `absolute`,
        right: `1em`,
        width: iconSize,
        height: iconSize,
        top: `calc(50% - ${iconSize} / 2)`,
        lineHeight: `1em`,
        filter: iconColorClosed,
      },

      color: cssTheme.colors.colorIntents.secondaryText,

      selectors: {
        [`[open] > &::before`]: {
          content: `var(--icon-opened)`,
          filter: iconColorOpened,
        },
        [`[open] > &`]: {
          color: cssTheme.colors.colorIntents.primaryText,
        },
      },
    };
  }),
  animate: style(({ theme, cssTheme }: Theme) => ({
    '::before': {
      transform: `rotate(90deg)`,
      transition: `transform 0.2s ease-in-out`,
    },
    selectors: {
      [`[open] > &::before`]: {
        transform: `rotate(0deg)`,
      },
    },
  })),
};

// hide the default arrow
globalStyle(`${styles.wrapper}::-webkit-details-marker`, {
  display: `none`,
  background: `none`,
  color: `transparent`,
});
