import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { layoutCSS, typographyVars } from '../theme';
import { getCapsizeTextStyles } from '../utilities-vanilla-extract';

export const base = style({
  fontFamily: typographyVars.labels.fontFamily,
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
      medium: {
        ...getCapsizeTextStyles(typographyVars.labels.mobile.medium.capsize),
        '@media': {
          [layoutCSS.media.tablet]: getCapsizeTextStyles(
            typographyVars.labels.tablet.medium.capsize
          ),
          [layoutCSS.media.desktopSmall]: getCapsizeTextStyles(
            typographyVars.labels.desktop.medium.capsize
          ),
        },
      },
      small: {
        ...getCapsizeTextStyles(typographyVars.labels.mobile.small.capsize),
        '@media': {
          [layoutCSS.media.tablet]: getCapsizeTextStyles(
            typographyVars.labels.tablet.small.capsize
          ),
          [layoutCSS.media.desktopSmall]: getCapsizeTextStyles(
            typographyVars.labels.desktop.small.capsize
          ),
        },
      },
      xSmall: {
        ...getCapsizeTextStyles(typographyVars.labels.mobile.xSmall.capsize),
        '@media': {
          [layoutCSS.media.tablet]: getCapsizeTextStyles(
            typographyVars.labels.tablet.xSmall.capsize
          ),
          [layoutCSS.media.desktopSmall]: getCapsizeTextStyles(
            typographyVars.labels.desktop.xSmall.capsize
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
