import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, sizeVars } from '../theme';

const iconSize = `1.5em`;
const iconOnlySize = `1.8em`;
const iconPadding = `3em`;

/**
 *
 * Vars
 *
 */

export const base = style({
  display: 'block',
  position: 'relative',
  outline: 'none',
  lineHeight: 0,
  cursor: 'pointer',
  appearance: 'none',
  userSelect: 'none',
  touchAction: 'none',
  WebkitAppearance: 'none',
  whiteSpace: 'nowrap', // don't allow wrapping
  borderRadius: 4,
  width: 'fit-content',
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
  border: `2px solid ${cssTheme.components.buttons.var.variants.primary.borderColor}`,
  backgroundColor: colorVars.colors.primary[500],
  selectors: {
    '&:active': {
      filter: `brightness(90%)`,
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: colorVars.colorIntents.disabledText,
      borderColor: colorVars.colorIntents.backgroundDisabled,
      backgroundColor: colorVars.colorIntents.backgroundDisabled,
    },
  },
});

/**
 * Secondary
 */
export const secondary = style({
  color: colorVars.colorIntents.primary,
  border: `2px solid ${colorVars.colorIntents.primary}`,
  selectors: {
    '&:active': {
      backgroundColor: colorVars.colors.primary[100],
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: colorVars.colorIntents.disabledText,
      borderColor: colorVars.colorIntents.backgroundDisabled,
      backgroundColor: colorVars.colorIntents.backgroundDisabled,
    },
  },
});

/**
 * Tertiary
 */
export const tertiary = style({
  color: colorVars.colorIntents.primary,
  selectors: {
    '&:active': {
      backgroundColor: colorVars.colors.primary[100],
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: colorVars.colorIntents.disabledText,
      backgroundColor: colorVars.colorIntents.backgroundDisabled,
    },
  },
});

/**
 * Sizes
 */
export const large = style({
  height: `calc(2 * ${sizeVars.x3} + ${
    cssTheme.typography.labels.mobile.medium.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${sizeVars.x3} + ${
    cssTheme.typography.labels.mobile.medium.capHeight
  }px + ${4}px)`,
  padding: `${sizeVars.x3} ${sizeVars.x3}`,
  fontSize: cssTheme.typography.labels.mobile.medium.capsize?.fontSize,
  borderRadius: cssTheme.components.buttons.var.sizes.large.border?.default?.radius,
  '@media': {
    [layoutCSS.media.tablet]: {
      height: `calc(2 * ${sizeVars.x3} + ${
        cssTheme.typography.labels.tablet.medium.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x3} + ${
        cssTheme.typography.labels.tablet.medium.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.tablet.medium.capsize?.fontSize,
    },
    [layoutCSS.media.desktopSmall]: {
      height: `calc(2 * ${sizeVars.x3} + ${
        cssTheme.typography.labels.desktop.medium.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x3} + ${
        cssTheme.typography.labels.desktop.medium.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.desktop.medium.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${sizeVars.x3} + (${iconSize} - ${sizeVars.x3}) / 2)`,
    },
    '&[datapaddingcollapse="left-icon"]': {
      marginLeft: `calc(-1 * ${sizeVars.x3} + (${iconOnlySize} - ${sizeVars.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      padding: `${sizeVars.x3} ${iconPadding} ${sizeVars.x3} ${sizeVars.x3}`,
    },
    '&[dataicon="left"]': {
      padding: `${sizeVars.x3} ${sizeVars.x3} ${sizeVars.x3} ${iconPadding}`,
    },
  },
});

export const collapsePaddingLeft = style({});

export const medium = style({
  height: `calc(2 * ${sizeVars.x2} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${sizeVars.x2} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  padding: `${sizeVars.x2} ${sizeVars.x2}`,
  fontSize: cssTheme.typography.labels.mobile.small.capsize?.fontSize,
  '@media': {
    [layoutCSS.media.tablet]: {
      height: `calc(2 * ${sizeVars.x2} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x2} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
    },
    [layoutCSS.media.desktopSmall]: {
      height: `calc(2 * ${sizeVars.x2} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x2} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${sizeVars.x2} + (${iconSize} - ${sizeVars.x3}) / 2)`,
    },
    '&[datapaddingcollapse="left-icon"]': {
      marginLeft: `calc(-1 * ${sizeVars.x2} + (${iconOnlySize} - ${sizeVars.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      padding: `${sizeVars.x2} ${iconPadding} ${sizeVars.x2} ${sizeVars.x2} `,
    },
    '&[dataicon="left"]': {
      padding: `${sizeVars.x2} ${sizeVars.x2} ${sizeVars.x2} ${iconPadding}`,
    },
  },
});

export const small = style({
  height: `calc(2 * ${sizeVars.x1} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${sizeVars.x1} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  padding: `${sizeVars.x1} ${sizeVars.x2}`,
  fontSize: cssTheme.typography.labels.mobile.small.capsize?.fontSize,
  '@media': {
    [layoutCSS.media.tablet]: {
      height: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
    },
    [layoutCSS.media.desktopSmall]: {
      height: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${sizeVars.x2} + (${iconSize} - ${sizeVars.x3}) / 2)`,
    },
    '&[datapaddingcollapse="left-icon"]': {
      marginLeft: `calc(-1 * ${sizeVars.x2} + (${iconOnlySize} - ${sizeVars.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      padding: `${sizeVars.x1} ${iconPadding} ${sizeVars.x1} ${sizeVars.x2}`,
    },
    '&[dataicon="left"]': {
      padding: `${sizeVars.x1} ${sizeVars.x1} ${sizeVars.x2} ${iconPadding}`,
    },
  },
});

export const xSmall = style({
  height: `calc(2 * ${sizeVars.x1} + ${
    cssTheme.typography.labels.mobile.xSmall.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${sizeVars.x1} + ${
    cssTheme.typography.labels.mobile.xSmall.capHeight
  }px + ${4}px)`,
  padding: `${sizeVars.x1} ${sizeVars.x1}`,
  fontSize: cssTheme.typography.labels.mobile.xSmall.capsize?.fontSize,
  '@media': {
    [layoutCSS.media.tablet]: {
      fontSize: cssTheme.typography.labels.tablet.xSmall.capsize?.fontSize,
    },
    [layoutCSS.media.desktopSmall]: {
      fontSize: cssTheme.typography.labels.desktop.xSmall.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${sizeVars.x1} + (${iconSize} - ${sizeVars.x3}) / 2)`,
    },
    '&[datapaddingcollapse="left-icon"]': {
      marginLeft: `calc(-1 * ${sizeVars.x1} + (${iconOnlySize} - ${sizeVars.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      height: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.tablet.xSmall.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.tablet.xSmall.capHeight
      }px + ${4}px)`,
      padding: `${sizeVars.x1} ${iconPadding} ${sizeVars.x1} ${sizeVars.x1}`,
    },
    '&[dataicon="left"]': {
      height: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.desktop.xSmall.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${sizeVars.x1} + ${
        cssTheme.typography.labels.desktop.xSmall.capHeight
      }px + ${4}px)`,
      padding: `${sizeVars.x1} ${sizeVars.x1} ${sizeVars.x1} ${iconPadding}`,
    },
  },
});

/**
 *
 * Icon
 *
 */

export const iconBase = style({
  position: 'absolute',
  height: iconSize,
  maxHeight: iconSize,
  width: iconSize,
  maxWidth: iconSize,
});

export const iconOnly = style({
  position: 'absolute',
  height: iconOnlySize,
  maxHeight: iconOnlySize,
  width: iconOnlySize,
  maxWidth: iconOnlySize,
});

export const icon = style({
  top: `calc(50% - ${iconOnlySize} / 2)`,
  left: `calc(50% - ${iconOnlySize} / 2)`,
});

export const right = style({
  top: `calc(50% - ${iconSize} / 2)`,
  right: `0.8em`,
});

export const left = style({
  top: `calc(50% - ${iconSize} / 2)`,
  left: `0.8em`,
});
