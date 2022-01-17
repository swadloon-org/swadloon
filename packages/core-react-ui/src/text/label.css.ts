import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { layoutCSS, typographyVars } from '../theme';

export const base = style({
  fontFamily: typographyVars.labels.font,
  width: 'fit-content',
});

export const inline = style({
  display: 'inline-block',
  userSelect: 'none',
  color: 'currentColor',
});

export const variants = recipe({
  variants: {
    size: {
      xSmall: {
        ...createStyleObject(typographyVars.labels.mobile.xSmall.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.labels.tablet.xSmall.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.labels.desktop.xSmall.capsize
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
      medium: {
        ...createStyleObject(typographyVars.labels.mobile.medium.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.labels.tablet.medium.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.labels.desktop.medium.capsize
          ),
        },
      },
    },
    style: {
      normal: {
        fontWeight: typographyVars.labels.fontWeight as any,
        fontStyle: typographyVars.labels.fontStyle,
        letterSpacing: typographyVars.labels.letterSpacing,
      },
      bold: {
        fontWeight: typographyVars.labels.styles.bold.fontWeight as any,
        fontStyle: typographyVars.labels.styles.bold.fontStyle,
        textTransform: typographyVars.labels.styles.bold.textTransform,
        letterSpacing: typographyVars.labels.styles.bold.letterSpacing,
      },
      italic: {
        fontWeight: typographyVars.labels.styles.italic.fontWeight as any,
        fontStyle: typographyVars.labels.styles.italic.fontStyle,
        textTransform: typographyVars.labels.styles.italic.textTransform,
        letterSpacing: typographyVars.labels.styles.italic.letterSpacing,
      },
      uppercase: {
        fontWeight: typographyVars.labels.styles.uppercase.fontWeight as any,
        fontStyle: typographyVars.labels.styles.uppercase.fontStyle,
        textTransform: typographyVars.labels.styles.uppercase.textTransform,
        letterSpacing: typographyVars.labels.styles.uppercase.letterSpacing,
      },
      boldUppercase: {
        fontWeight: typographyVars.labels.styles.boldUppercase.fontWeight as any,
        fontStyle: typographyVars.labels.styles.boldUppercase.fontStyle,
        textTransform: typographyVars.labels.styles.boldUppercase.textTransform,
        letterSpacing: typographyVars.labels.styles.boldUppercase.letterSpacing,
      },
      italicBold: {
        fontWeight: typographyVars.labels.styles.italicBold.fontWeight as any,
        fontStyle: typographyVars.labels.styles.italicBold.fontStyle,
        textTransform: typographyVars.labels.styles.italicBold.textTransform,
        letterSpacing: typographyVars.labels.styles.italicBold.letterSpacing,
      },
    },
  },
});

export type LabelVariants = RecipeVariants<typeof variants>;

/**
 * Styles
 */
// export const normal = style({});
// export const italic = style({
//   ...getCSSTextStyles(cssTheme.typography.labels.styles.italic),
// });
// export const bold = style({
//   ...getCSSTextStyles(cssTheme.typography.labels.styles.bold),
// });
// export const uppercase = style({
//   ...getCSSTextStyles(cssTheme.typography.labels.styles.uppercase),
// });
// export const boldUppercase = style({
//   ...getCSSTextStyles(cssTheme.typography.labels.styles.boldUppercase),
// });
// export const italicBold = style({
//   ...getCSSTextStyles(cssTheme.typography.labels.styles.italicBold),
// });

// export const primary = style({
//   color: colorVars.colorIntents.primaryText,
// });

// export const secondary = style({
//   color: cssTheme.colors.colorIntents.secondaryText,
// });

// export const tertiary = style({
//   color: cssTheme.colors.colorIntents.tertiaryText,
// });
