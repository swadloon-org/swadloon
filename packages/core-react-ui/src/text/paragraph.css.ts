import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { layoutCSS, typographyVars } from '../theme';
import { getNormalTextStyles } from '../utilities-vanilla-extract';

export const base = style({
  fontFamily: typographyVars.paragraphs.fontFamily,
  position: 'relative',
  wordBreak: 'normal',
  userSelect: 'text',
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
      largeNoCapsize: {
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
      mediumNoCapsize: {
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
      smallNoCapsize: {
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
      xSmallNoCapsize: {
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
    displayMode: {
      ['block']: {
        display: 'block',
      },
      ['inline-block']: {
        display: 'inline-block',
      },
    },
    readableWidth: {
      true: {
        maxWidth: '80ch',
      },
    },
  },
});

export type ParagraphVariants = RecipeVariants<typeof variants>;
