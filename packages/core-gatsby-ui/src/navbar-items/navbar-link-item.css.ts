import { colorVars, effectsVars, layoutVars } from '@newrade/core-react-ui/theme';
import { style } from '@vanilla-extract/css';

/**
 *
 * Base
 *
 */

export const base = style({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  appearance: 'none',
  userSelect: 'none',
  touchAction: 'none',
  WebkitAppearance: 'none',
  whiteSpace: 'nowrap', // don't allow wrapping
  width: 'fit-content',
  textDecoration: 'none',
  textDecorationColor: colorVars.colorIntents.primary,

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
});

/**
 *
 * States
 *
 */

export const rest = style({
  borderBottomColor: `transparent`,
});
export const active = style({
  color: colorVars.colorIntents.primary,
  borderBottomColor: colorVars.colorIntents.primary,
});
export const hover = style({
  ':hover': {
    color: colorVars.colorIntents.primary,
  },
});
export const disabled = style({});

/**
 *
 * Kinds
 *
 */
export const external = style({
  color: colorVars.colorIntents.primary,
});

/**
 *
 * Variants
 *
 */

export const primary = style({});

/**
 *
 * Sizes
 *
 */

export const medium = style({
  padding: `0 16px`,
  height: layoutVars.var.navbarHeight,
});
