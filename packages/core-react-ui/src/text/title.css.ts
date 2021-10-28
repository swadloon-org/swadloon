import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { layoutCSS, typographyCSS, typographyVars } from '../theme';
import { getCapsizeStyles } from '../utilities/text.utilities';

export const title = recipe({
  base: [
    {
      position: 'relative',
      wordBreak: 'normal',
      userSelect: 'none', // disable text selection for titles
    },
  ],
  // for color Variant (see color-text.css.ts)
  variants: {
    /**
     * Sizes
     */
    size: {
      t1: {
        fontFamily: typographyVars.titles.mobile.t1.fontFamily,
        ...getCapsizeStyles({...typographyCSS.titles, fontMetrics: typographyCSS.fonts.}),
        '@media': {
          [layoutCSS.media.tablet]: {
            fontFamily: typographyVars.titles.tablet.t1.fontFamily,
          },
          [layoutCSS.media.desktopSmall]: {
            fontFamily: typographyVars.titles.desktop.t1.fontFamily,
          },
        },
      },
      t2: {
        fontFamily: typographyVars.titles.mobile.t2.fontFamily,
      },
    },
  },
});

export type TitleVariants = RecipeVariants<typeof title>;
