import { style } from '@vanilla-extract/css';

import { colorVars } from '../theme';
import { px } from '../utilities/utilities';

/**
 * Base
 */
export const base = style({
  display: 'block',
  position: 'relative',
  outline: 'none',
  padding: 0,
  lineHeight: 0,
  cursor: 'pointer',
  border: `none`,
  appearance: 'none',
  userSelect: 'none',
  touchAction: 'none',
  WebkitAppearance: 'none',
  width: 'fit-content',
  ':focus': {
    // boxShadow: `0 0 0 1px ${colorVars.colors.primary[700]}`,
  },
});

/**
 * States
 */
export const rest = style({});

export const loading = style({});

export const disabled = style({});

/**
 *
 * Variants
 *
 */

/**
 * Primary
 */
export const primary = style({
  color: cssTheme.components.buttons.var.variants.primary.textColor,
  backgroundColor: colorVars.colors.primary[500],
  selectors: {
    '&:active': {
      filter: `brightness(90%)`,
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: colorVars.colorIntents.disabledText,
      backgroundColor: colorVars.colorIntents.backgroundDisabled,
    },
  },
});

export const primaryOff = style({
  backgroundColor: colorVars.colors.grey[400],
});

const thumbSize = 20;
const iconSize = 16;
const paddingSide = 3;
const paddingTopBottom = 3;
const spacingBetweenThumbs = 2;
const width = 2 * paddingSide + 2 * thumbSize + spacingBetweenThumbs;
const height = 2 * paddingTopBottom + 1 * thumbSize;

/**
 *
 * Sizes
 *
 */

export const medium = style({
  height: px({ value: height }),
  width: px({ value: width }),

  borderRadius: `24px`,
});

export const thumb = style({
  display: 'block',
  position: 'absolute',
  left: 0,
  top: paddingTopBottom,

  height: thumbSize,
  width: thumbSize,
  boxShadow: `rgb(0 0 0 / 30%) 0px 0px 2px`,

  outline: 'none',
  lineHeight: 0,

  borderRadius: `9999px`,
  backgroundColor: 'white',

  userSelect: 'none',
  touchAction: 'none',

  transition: 'transform 100ms',
  transform: `translateX(${thumbSize + paddingSide + spacingBetweenThumbs}px)`,
  willChange: 'transform',
});

export const thumbOff = style({
  transform: 'translateX(3px)',
});

/**
 *
 * Icons
 *
 */

export const icon = style({
  display: 'block',
  position: 'absolute',
  zIndex: 1,
  fill: colorVars.colors.grey[700],
  stroke: colorVars.colors.grey[700],
  height: iconSize,
  width: iconSize,
});

export const iconRight = style({
  right: paddingSide + 2,
  top: 5,
});

export const iconLeft = style({
  left: paddingSide + 2,
  top: 5,
});
