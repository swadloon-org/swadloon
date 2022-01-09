import { globalStyle, style } from "@vanilla-extract/css";



const iconSize = `32px`;


  wrapper: style(({ theme, cssTheme }: Theme) => {
    return {
      display: `flex`,
      position: `relative`,
      userSelect: `none`,

      listStyleImage: `none`,
      padding: `${sizeVars.x4} 0`,
      paddingRight: `2em`,
      borderTop: `1px solid ${colorVars.colors.grey[50]}`,

      cursor: `pointer`,

      // TODO: find a better effect on desktop
      // '@media': {
      //   [layoutCSS.media.desktopSmall]: {
      //     ':hover': {
      //       backgroundColor: getCSSColor({ h: 222, s: 0, l: 10, a: 5 }),
      //     },
      //   },
      // },

      ':focus': {
        outline: `none`,
      },

      color: colorVars.colorIntents.secondaryText,

      selectors: {
        [`[open] > &`]: {
          color: colorVars.colorIntents.primaryText,
        },
      },
    };
  }),
 export const icon = style({
    position: `absolute`,
    right: sizeVars.x1,
    width: iconSize,
    height: iconSize,
    top: `calc(50% - ${iconSize} / 2)`,
    lineHeight: `1em`,
  });
 export const iconOpened = style({
    selectors: {
      [`[open] &`]: {
        visibility: 'visible',
      },
    },
  });
 export const iconClosed = style({
    selectors: {
      [`[open] &`]: {
        visibility: 'hidden',
      },
    },
  });
 export const animate = style({
    '::before': {
      transform: `rotate(90deg)`,
      transition: `transform 0.2s ease-in-out`,
    },
    selectors: {
      [`[open] > &::before`]: {
        transform: `rotate(0deg)`,
      },
    },
  });


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
