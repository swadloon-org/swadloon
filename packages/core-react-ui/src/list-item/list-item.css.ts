import { createStyleObject } from '@capsizecss/core';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { layoutCSS, typographyVars } from '../theme';
import { getNormalTextStyles } from '../utilities-vanilla-extract';

/**
 * @see https://web.dev/css-marker-pseudo-element/
 */

/**
 * States
 */
export const base = style({
  position: 'relative',

  display: 'list-item',
  width: '100%',
  whiteSpace: `nowrap`,

  outline: 'none',
  userSelect: 'text',

  fontFamily: typographyVars.paragraphs.fontFamily,
});

export const text = style({
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

export const variants = recipe({
  variants: {
    size: {
      large: {
        ...getNormalTextStyles(typographyVars.paragraphs.mobile.large.capsize),
        '@media': {
          [layoutCSS.media.tablet]: getNormalTextStyles(
            typographyVars.paragraphs.tablet.large.capsize
          ),
          [layoutCSS.media.desktopSmall]: getNormalTextStyles(
            typographyVars.paragraphs.desktop.large.capsize
          ),
        },
      },
      medium: {
        ...getNormalTextStyles(typographyVars.paragraphs.mobile.medium.capsize),
        '@media': {
          [layoutCSS.media.tablet]: getNormalTextStyles(
            typographyVars.paragraphs.tablet.medium.capsize
          ),
          [layoutCSS.media.desktopSmall]: getNormalTextStyles(
            typographyVars.paragraphs.desktop.medium.capsize
          ),
        },
      },
      small: {
        ...getNormalTextStyles(typographyVars.paragraphs.mobile.small.capsize),
        '@media': {
          [layoutCSS.media.tablet]: getNormalTextStyles(
            typographyVars.paragraphs.tablet.small.capsize
          ),
          [layoutCSS.media.desktopSmall]: getNormalTextStyles(
            typographyVars.paragraphs.desktop.small.capsize
          ),
        },
      },
      xSmall: {
        ...getNormalTextStyles(typographyVars.paragraphs.mobile.xSmall.capsize),
        '@media': {
          [layoutCSS.media.tablet]: getNormalTextStyles(
            typographyVars.paragraphs.tablet.xSmall.capsize
          ),
          [layoutCSS.media.desktopSmall]: getNormalTextStyles(
            typographyVars.paragraphs.desktop.xSmall.capsize
          ),
        },
      },
    },
    style: {
      normal: {
        fontWeight: typographyVars.paragraphs.fontWeight as any,
        fontStyle: typographyVars.paragraphs.fontStyle,
        letterSpacing: typographyVars.paragraphs.letterSpacing,
      },
      bold: {
        fontWeight: typographyVars.paragraphs.styles.bold.fontWeight as any,
        fontStyle: typographyVars.paragraphs.styles.bold.fontStyle,
        textTransform: typographyVars.paragraphs.styles.bold.textTransform,
        letterSpacing: typographyVars.paragraphs.styles.bold.letterSpacing,
      },
      italic: {
        fontWeight: typographyVars.paragraphs.styles.italic.fontWeight as any,
        fontStyle: typographyVars.paragraphs.styles.italic.fontStyle,
        textTransform: typographyVars.paragraphs.styles.italic.textTransform,
        letterSpacing: typographyVars.paragraphs.styles.italic.letterSpacing,
      },
      uppercase: {
        fontWeight: typographyVars.paragraphs.styles.uppercase.fontWeight as any,
        fontStyle: typographyVars.paragraphs.styles.uppercase.fontStyle,
        textTransform: typographyVars.paragraphs.styles.uppercase.textTransform,
        letterSpacing: typographyVars.paragraphs.styles.uppercase.letterSpacing,
      },
      boldUppercase: {
        fontWeight: typographyVars.paragraphs.styles.boldUppercase.fontWeight as any,
        fontStyle: typographyVars.paragraphs.styles.boldUppercase.fontStyle,
        textTransform: typographyVars.paragraphs.styles.boldUppercase.textTransform,
        letterSpacing: typographyVars.paragraphs.styles.boldUppercase.letterSpacing,
      },
      italicBold: {
        fontWeight: typographyVars.paragraphs.styles.italicBold.fontWeight as any,
        fontStyle: typographyVars.paragraphs.styles.italicBold.fontStyle,
        textTransform: typographyVars.paragraphs.styles.italicBold.textTransform,
        letterSpacing: typographyVars.paragraphs.styles.italicBold.letterSpacing,
      },
    },
  },
});

/**
 * @see allowed props https://web.dev/css-marker-pseudo-element/#allowed-css-::marker-properties
 */
globalStyle(`ul ${base}::marker`, {
  fontWeight: typographyVars.paragraphs.styles?.bold?.fontWeight || 400,
  fontSize: '1.3em',
});

/**
 * @see allowed props https://web.dev/css-marker-pseudo-element/#allowed-css-::marker-properties
 */
globalStyle(`ol ${base}::marker`, {
  fontWeight: typographyVars.paragraphs.styles?.normal?.fontWeight || 400,
});

globalStyle(`${base} p`, {
  padding: 'inherit',
});

//
// make sure that enclosed elements wrap correctly
//
globalStyle(`${text} *:is(em,p,strong)`, {
  whiteSpace: 'normal',
  display: 'inline !important',
});

//
// disable capsize
//
globalStyle(`${text} *::before`, {
  display: 'none !important',
});
globalStyle(`${text} *::after`, {
  display: 'none !important',
});

globalStyle(`${base} p::after`, {
  content: 'none',
});

globalStyle(`${base} p::before`, {
  content: 'none',
});
