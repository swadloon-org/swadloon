import { globalStyle, style } from "@vanilla-extract/css";


import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities/text.utilities';

/**
 * @see https://web.dev/css-marker-pseudo-element/
 */

  /**
   * States
   */
 export const wrapper = style({
    position: 'relative',

    display: 'list-item',
    width: '100%',
    whiteSpace: `nowrap`,

    outline: 'none',
    userSelect: 'text',
  });

 export const content = style({
    display: 'inline-block',
    minHeight: '1em',
    width: `100%`,
    maxWidth: 'min(60ch, 100% - 3em)', // collapse the content so it does not overflow
    verticalAlign: 'top',
    whiteSpace: `normal`,

    // more space between the marker and the content
    position: 'relative',
    left: `0px`,
  });

  /**
   * Sizes (from link)
   */
 export const large = style({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large, {
      disablePseudo: true,
    }),
    '@media': {
      [layoutCSS.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large, {
          disablePseudo: true,
        }),
      },
      [layoutCSS.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large, {
          disablePseudo: true,
        }),
      },
    },
  });
 export const medium = style({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium, {
      disablePseudo: true,
    }),
    '@media': {
      [layoutCSS.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium, {
          disablePseudo: true,
        }),
      },
      [layoutCSS.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium, {
          disablePseudo: true,
        }),
      },
    },
  });
 export const small = style({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small, {
      disablePseudo: true,
    }),
    '@media': {
      [layoutCSS.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small, {
          disablePseudo: true,
        }),
      },
      [layoutCSS.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small, {
          disablePseudo: true,
        }),
      },
    },
  });
 export const xSmall = style({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall, {
      disablePseudo: true,
    }),
    '@media': {
      [layoutCSS.media.tablet]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall, {
          disablePseudo: true,
        }),
      },
      [layoutCSS.media.desktopSmall]: {
        ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall, {
          disablePseudo: true,
        }),
      },
    },
  });

  /**
   * Text styles
   */
 export const primary = style({
    color: colorVars.colorIntents.primaryText,
  });
 export const secondary = style({
    color: colorVars.colorIntents.secondaryText,
  });
 export const tertiary = style({
    color: colorVars.colorIntents.tertiaryText,
  });


/**
 * @see allowed props https://web.dev/css-marker-pseudo-element/#allowed-css-::marker-properties
 */
globalStyle(`ul ${styles.wrapper}::marker`, {
  fontWeight: cssTheme.typography.paragraphs.styles?.bold?.fontWeight || 400,
});


globalStyle(`${styles.wrapper} p`, {
  padding: 'inherit',
});


// make sure that enclosed elements wrap correctly
globalStyle(`${styles.content} *:is(em,p,strong)`, { cssTheme, theme }: Theme) => ({
  whiteSpace: 'normal',
  display: 'inline !important',
});

// disable capsize on inner elements
globalStyle(
  `${styles.content} *::before, ${styles.content} *::after`,
  ({ cssTheme, theme }: Theme) => ({
    display: 'none !important',
  })
);

globalStyle(`${styles.wrapper} p::after`, {
  content: 'none',
});


globalStyle(`${styles.wrapper} p::before`, {
  content: 'none',
});

