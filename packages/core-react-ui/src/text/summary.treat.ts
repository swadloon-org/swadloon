import { globalStyle, style } from 'treat';

import { Theme } from '../design-system';

const iconSize = `32px`;

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => {
    return {
      display: `flex`,
      position: `relative`,
      userSelect: `none`,

      listStyleImage: `none`,
      padding: `${cssTheme.sizing.var.x5} 0`,
      paddingRight: `2em`,
      borderTop: `1px solid ${cssTheme.colors.colors.grey[50]}`,

      cursor: `pointer`,

      // TODO: find a better effect on desktop
      // '@media': {
      //   [cssTheme.layout.media.desktopSmall]: {
      //     ':hover': {
      //       backgroundColor: getCSSColor({ h: 222, s: 0, l: 10, a: 5 }),
      //     },
      //   },
      // },

      ':focus': {
        outline: `none`,
      },

      color: cssTheme.colors.colorIntents.secondaryText,

      selectors: {
        [`[open] > &`]: {
          color: cssTheme.colors.colorIntents.primaryText,
        },
      },
    };
  }),
  icon: style(({ theme, cssTheme }: Theme) => ({
    position: `absolute`,
    right: cssTheme.sizing.var.x1,
    width: iconSize,
    height: iconSize,
    top: `calc(50% - ${iconSize} / 2)`,
    lineHeight: `1em`,
  })),
  iconOpened: style(({ theme, cssTheme }: Theme) => ({
    selectors: {
      [`[open] &`]: {
        visibility: 'visible',
      },
    },
  })),
  iconClosed: style(({ theme, cssTheme }: Theme) => ({
    selectors: {
      [`[open] &`]: {
        visibility: 'hidden',
      },
    },
  })),
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

globalStyle(`${styles.icon} svg path`, {
  stroke: 'currentColor',
  strokeWidth: 32,
});

// hide the default arrow
globalStyle(`${styles.wrapper}::-webkit-details-marker`, {
  display: `none`,
  background: `none`,
  color: `transparent`,
});
