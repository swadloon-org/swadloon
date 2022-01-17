import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colorVars, layoutCSS, typographyVars } from '../theme';

/**
 *
 * Tag wrapper
 *
 */

export const base = style({
  display: 'inline-block',
  width: 'fit-content',
  maxWidth: '100%', // ensure it respect the parent's width
  wordBreak: 'normal',
  border: `1px solid`,
  lineHeight: 1,
});

export const variants = recipe({
  variants: {
    size: {
      medium: {
        padding: `5px 4px`,
        borderRadius: 6,
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
        padding: `4px 3px`,
        borderRadius: 5,
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
    },
    variant: {
      primary: {
        borderColor: colorVars.colors.grey[50],
        color: colorVars.colors.grey[700],
        backgroundColor: colorVars.colors.grey[50],
      },
      secondary: {
        borderColor: colorVars.colors.accent1[100],
        color: colorVars.colors.accent1[500],
        backgroundColor: colorVars.colors.accent1[100],
      },
      tertiary: {
        borderColor: colorVars.colors.accent2[100],
        color: colorVars.colors.accent2[500],
        backgroundColor: colorVars.colors.accent2[100],
      },
    },
  },
});

/**
 *
 * Label text
 *
 */

export const labelVariants = recipe({
  base: {
    color: 'inherit !important',
  },
  variants: {
    size: {
      medium: {
        ...createStyleObject(typographyVars.labels.mobile.small.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.labels.tablet.small.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.labels.desktop.small.capsize
          ),
        },
      },
      small: {
        ...createStyleObject(typographyVars.labels.mobile.small.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.labels.tablet.small.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.labels.desktop.small.capsize
          ),
        },
      },
    },
  },
});
