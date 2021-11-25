import { createTextStyle } from '@capsizecss/vanilla-extract';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { layoutCSS, typographyVars } from '../theme';

export const t1 = createTextStyle(typographyVars.titles.mobile.t1.capsize, {
  '@media': {
    [layoutCSS.media.tablet]: typographyVars.titles.tablet.t1.capsize,
    [layoutCSS.media.desktopSmall]: typographyVars.titles.desktop.t1.capsize,
  },
});

export const t2 = createTextStyle(typographyVars.titles.mobile.t2.capsize, {
  '@media': {
    [layoutCSS.media.tablet]: typographyVars.titles.tablet.t2.capsize,
    [layoutCSS.media.desktopSmall]: typographyVars.titles.desktop.t2.capsize,
  },
});

export const title = recipe({
  base: [
    {
      fontFamily: typographyVars.titles.font,
      position: 'relative',
      wordBreak: 'normal',
      userSelect: 'none',
    },
  ],
  variants: {
    size: {
      t1: t1,
      t2: t2,
    },
  },
});

export type TitleVariants = RecipeVariants<typeof title>;
