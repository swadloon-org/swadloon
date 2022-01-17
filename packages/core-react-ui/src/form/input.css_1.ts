import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, sizeVars } from '../theme';

/**
 * Wrapper for the select element and icon
 */
export const wrapper = style({
  position: 'relative',
  height: 'fit-content',
});

/**
 * Variant
 */
export const primary = style({
  color: colorVars.colorIntents.primaryText,
  border: `1px solid ${colorVars.colors.grey[400]}`,
  backgroundColor: colorVars.colors.grey[0],
  selectors: {
    '&[disabled]': {
      cursor: 'not-allowed',
      color: colorVars.colorIntents.disabledText,
      backgroundColor: colorVars.colorIntents.backgroundDisabled,
    },
  },
});

/**
 * States
 */
export const rest = style({
  position: 'relative',
  minWidth: `100%`,
  outline: 'none',
  lineHeight: 0,
  cursor: 'auto',
  verticalAlign: 'middle',
  appearance: 'none',
  userSelect: 'auto',
  touchAction: 'none',
  WebkitAppearance: 'none',
  whiteSpace: 'nowrap', // don't allow wrapping
  borderRadius: 4,
  width: 'fit-content',
  ':focus': {
    boxShadow: `0 0 1px 1px ${colorVars.colors.primary[300]}`,
  },
  '::-webkit-input-placeholder': {
    color: colorVars.colors.grey[300],
    verticalAlign: 'middle',
  },

  //   input:-webkit-autofill {
  //     box-shadow: inset 0 0 0 100px hsl(208 100% 95%);
  // }

  // input:-webkit-autofill::first-line {
  //     font-family: 'Untitled Sans', helvetica, sans-serif;
  //     color: hsl(208 12% 5%);
  // }
  '@media': {
    [layoutCSS.media.tablet]: {
      // minWidth: 256,
    },
  },
});

export const loading = style({});

export const disabled = style({});

export const error = style({
  boxShadow: `0 0 0 1px ${colorVars.colorIntents.dangerAction}`,
});

/**
 * Sizes
 */
export const medium = style({
  padding: `0 ${sizeVars.x2}`,
  fontFamily: cssTheme.typography.labels.mobile.small.fontFamily,
  fontSize: `max(16px, ${cssTheme.typography.labels.tablet.small.capsize?.fontSize})`,
  height: `56px`,
  lineHeight: `56px`,
  '::-webkit-input-placeholder': {
    lineHeight: `56px`,
  },
  '@media': {
    [layoutCSS.media.tablet]: {
      fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
      height: `56px`,
      lineHeight: `56px`,
      '::-webkit-input-placeholder': {
        lineHeight: `56px`,
      },
    },
    [layoutCSS.media.desktopSmall]: {
      fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
      height: `48px`,
      lineHeight: `48px`,
      '::-webkit-input-placeholder': {
        lineHeight: `48px`,
      },
    },
  },
});

/**
 *
 * Icons
 *
 */

export const iconPaddingRight = style({
  paddingRight: `calc(16px + ${sizeVars.x1} + ${sizeVars.x2})`,
});

export const iconPaddingLeft = style({
  paddingLeft: `calc(16px + ${sizeVars.x1} + ${sizeVars.x2})`,
});

export const iconRight = style({
  height: '16px',
  position: 'absolute',
  top: `calc(50% - 8px)`,
  right: sizeVars.x2,
  pointerEvents: 'none',
  zIndex: 1,
});

export const iconLeft = style({
  height: '16px',
  position: 'absolute',
  top: `calc(50% - 8px)`,
  left: sizeVars.x2,
  pointerEvents: 'none',
  zIndex: 1,
});
