import { createVar, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { layoutVars } from '../default-theme/src/theme.js';

/**
 *
 * Vars
 *
 */

const padding = createVar();

/**
 *
 * Base
 *
 */

export const base = style([
  {
    vars: {
      [padding]: `8px`,
    },
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
]);

export const navbarSelectItem = recipe({
  variants: {
    /**
     * Sizes
     */
    size: {
      small: { padding: `0 ${padding}`, height: layoutVars.var.navbarHeight },
      medium: { padding: `0 ${padding}`, height: layoutVars.var.navbarHeight },
    },
    /**
     * Collapse Padding
     */
    padding: {
      left: { marginLeft: `calc(-1 * ${padding})` },
      right: { marginRight: `calc(-1 * ${padding})` },
      both: { marginRight: `calc(-1 * ${padding})`, marginLeft: `calc(-1 * ${padding})` },
    },
  },
});

export type NavbarSelectItemVariants = RecipeVariants<typeof navbarSelectItem>;
