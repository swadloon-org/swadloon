import { createVar, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { colorVars, layoutVars, sizeVars } from '../theme';

import { resetButtonStyle } from '../css/reset-button.css';

/**
 *
 * Vars
 *
 */

const textColor = createVar();
const textColorActive = createVar();
const textColorDisabled = createVar();
const borderColor = createVar();
const borderColorActive = createVar();
const borderColorDisabled = createVar();
const backgroundColorActive = createVar();
const backgroundColorDisabled = createVar();

/**
 *
 * Base
 *
 */

export const base = style([
  resetButtonStyle,
  {
    vars: {
      [textColor]: colorVars.colorIntents.primaryText,
      [textColorActive]: colorVars.colorIntents.primary,
      [textColorDisabled]: colorVars.colorIntents.disabledText,
      [borderColor]: colorVars.colorIntents.primary,
      [borderColorDisabled]: `transparent`,
      [backgroundColorActive]: colorVars.colors.grey[0],
      [backgroundColorDisabled]: `transparent`,
    },

    position: 'relative',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    touchAction: 'none',
    whiteSpace: 'nowrap', // don't allow wrapping
    width: 'fit-content',
    textDecoration: 'none',
    textDecorationColor: 'none',

    borderBottom: `2px solid transparent`,

    transitionProperty: `border-bottom-color, color, box-shadow`,
    transitionDuration: '200ms',
    transitionTimingFunction: 'ease-out',

    selectors: {
      '&:focus': {
        outline: 'none',
        // boxShadow: effectsVars.outlineShadows.focus,
      },
    },
  },
]);

export const navbarButton = recipe({
  variants: {
    /**
     * Variants
     */
    variant: { primary: {} },
    /**
     * Kinds
     */
    kind: {
      normal: {},
      external: { color: textColor },
    },
    /**
     * Sizes
     */
    size: {
      small: { padding: `0 16px`, height: layoutVars.var.navbarHeight },
      medium: { padding: `0 16px`, height: layoutVars.var.navbarHeight },
    },
    /**
     * States
     */
    state: {
      rest: {
        color: textColor,
      },
      active: {
        color: textColorActive,
        borderColor: borderColorActive,
        backgroundColor: backgroundColorActive,
      },
      disabled: {
        cursor: 'not-allowed',
        color: textColorDisabled,
        borderColor: borderColorDisabled,
        backgroundColor: backgroundColorDisabled,
        ':focus': {
          outline: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
});

export type NavbarItemLinkVariants = RecipeVariants<typeof navbarButton>;

/**
 *
 * Icons
 *
 */

export const icon = style({
  width: '1em',
  height: '1em',
  marginLeft: sizeVars.x0,
  marginBottom: `2px`,
});

/**
 *
 * Logo
 *
 */

export const logo = style({
  height: `calc(0.45 * ${layoutVars.var.navbarHeight})`,
  maxHeight: 50,
});

export const logoWrapper = style({
  display: 'flex',
  justifySelf: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});
