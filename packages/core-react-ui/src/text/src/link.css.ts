import { createStyleObject } from '@capsizecss/core';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colorVars, layoutCSS, typographyVars } from '../default-theme/src/theme.js';

export const base = style({
  fontFamily: typographyVars.paragraphs.fontFamily,
  wordBreak: 'normal',
  outline: 'none',
  cursor: 'pointer',
  width: 'fit-content',
  userSelect: 'text',
  appearance: 'none',
  WebkitAppearance: 'none',
  ':active': {
    color: colorVars.colors.primary[700],
  },
});

export const variants = recipe({
  variants: {
    size: {
      large: {
        ...createStyleObject(typographyVars.paragraphs.mobile.large.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(
            typographyVars.paragraphs.tablet.large.capsize
          ),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.paragraphs.desktop.large.capsize
          ),
        },
      },
      medium: {
        ...createStyleObject(typographyVars.paragraphs.mobile.medium.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(
            typographyVars.paragraphs.tablet.medium.capsize
          ),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.paragraphs.desktop.medium.capsize
          ),
        },
      },
      small: {
        ...createStyleObject(typographyVars.paragraphs.mobile.small.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(
            typographyVars.paragraphs.tablet.small.capsize
          ),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.paragraphs.desktop.small.capsize
          ),
        },
      },
      xSmall: {
        ...createStyleObject(typographyVars.paragraphs.mobile.xSmall.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(
            typographyVars.paragraphs.tablet.xSmall.capsize
          ),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.paragraphs.desktop.xSmall.capsize
          ),
        },
      },
    },
    variant: {
      primary: {
        color: colorVars.colorIntents.primary,
      },
      secondary: {
        color: colorVars.colorIntents.secondaryText,
      },
      tertiary: {
        color: colorVars.colorIntents.tertiaryText,
      },
    },
    style: {
      underline: {
        textDecoration: 'underline',
        selectors: {
          '&:hover': {
            color: colorVars.colorIntents.primary,
            textDecoration: 'underline',
          },
        },
      },
      noUnderline: {
        textDecoration: 'none',
        selectors: {
          '&:hover': {
            color: colorVars.colorIntents.primary,
            textDecoration: 'underline',
          },
        },
      },
    },
    textStyle: {
      normal: {
        fontWeight: typographyVars.paragraphs.fontWeight as any,
        fontStyle: typographyVars.paragraphs.fontStyle,
        textTransform: typographyVars.paragraphs.styles.normal.textTransform,
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
 *
 * Icon
 *
 */

export const icon = style({
  display: 'inline-block',

  marginLeft: '3px',
  marginRight: '1px',
  verticalAlign: '-0.1em',
  fontSize: '1em',
  lineHeight: '0',

  textDecoration: 'none',
});

globalStyle(`${icon} path`, {
  strokeWidth: 42,
});
