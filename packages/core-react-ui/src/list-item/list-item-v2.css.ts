import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, typographyVars } from '../theme';

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
  ...getCSSTextStyles(typographyVars.paragraphs.mobile.large, {
    disablePseudo: true,
  }),
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.tablet.large, {
        disablePseudo: true,
      }),
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.desktop.large, {
        disablePseudo: true,
      }),
    },
  },
});

export const medium = style({
  ...getCSSTextStyles(typographyVars.paragraphs.mobile.medium, {
    disablePseudo: true,
  }),
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.tablet.medium, {
        disablePseudo: true,
      }),
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.desktop.medium, {
        disablePseudo: true,
      }),
    },
  },
});

export const small = style({
  ...getCSSTextStyles(typographyVars.paragraphs.mobile.small, {
    disablePseudo: true,
  }),
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.tablet.small, {
        disablePseudo: true,
      }),
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.desktop.small, {
        disablePseudo: true,
      }),
    },
  },
});
export const xSmall = style({
  ...getCSSTextStyles(typographyVars.paragraphs.mobile.xSmall, {
    disablePseudo: true,
  }),
  '@media': {
    [layoutCSS.media.tablet]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.tablet.xSmall, {
        disablePseudo: true,
      }),
    },
    [layoutCSS.media.desktopSmall]: {
      ...getCSSSizeTextStyles(typographyVars.paragraphs.desktop.xSmall, {
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
globalStyle(`ul ${wrapper}::marker`, {
  fontWeight: typographyVars.paragraphs.styles?.bold?.fontWeight || 400,
});

globalStyle(`${wrapper} p`, {
  padding: 'inherit',
});

// make sure that enclosed elements wrap correctly
globalStyle(`${content} *:is(em,p,strong)`, {
  whiteSpace: 'normal',
  display: 'inline !important',
});

// disable capsize on inner elements
globalStyle(`${content} *::before, ${content} *::after`, {
  display: 'none !important',
});

globalStyle(`${wrapper} p::after`, {
  content: 'none',
});

globalStyle(`${wrapper} p::before`, {
  content: 'none',
});
