import { createStyleObject } from '@capsizecss/core';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { layoutCSS, typographyVars } from '../theme';

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
      t1: {
        ...createStyleObject(typographyVars.titles.mobile.t1.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.titles.tablet.t1.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.titles.desktop.t1.capsize
          ),
        },
      },
      t2: {
        ...createStyleObject(typographyVars.titles.mobile.t2.capsize),
        '@media': {
          [layoutCSS.media.tablet]: createStyleObject(typographyVars.titles.tablet.t2.capsize),
          [layoutCSS.media.desktopSmall]: createStyleObject(
            typographyVars.titles.desktop.t2.capsize
          ),
        },
      },
    },
  },
});

export type TitleVariants = RecipeVariants<typeof title>;
