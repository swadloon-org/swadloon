import { disabledStyle, resetButtonStyle } from '@newrade/core-react-ui';
import { colorVars, effectsVars, layoutVars, sizingVars } from '@newrade/core-react-ui/theme';
import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
/**
 *
 * Base
 *
 */

export const navbarItemLink = recipe({
  base: [
    resetButtonStyle,
    {
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
          boxShadow: effectsVars.outlineShadows.focus,
        },
      },
    },
  ],
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
      external: { color: colorVars.colorIntents.primary },
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
      rest: { color: colorVars.colorIntents.primaryText, borderBottomColor: `transparent` },
      active: {
        color: colorVars.colorIntents.primary,
        borderBottomColor: colorVars.colorIntents.primary,
      },
      disabled: [
        disabledStyle,
        {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      ],
    },
    hover: {
      true: {
        ':hover': {
          color: colorVars.colorIntents.primary,
        },
      },
      false: {},
    },
  },
});

export type NavbarItemLinkVariants = RecipeVariants<typeof navbarItemLink>;

/**
 *
 * Icons
 *
 */

export const icon = style({
  width: '1em',
  height: '1em',
  marginLeft: sizingVars.var.x0,
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
