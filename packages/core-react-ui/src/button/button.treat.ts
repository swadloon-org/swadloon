import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';

const iconSize = `1.5em`;
const iconPadding = `3em`;

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
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
  ':focus': {
    // boxShadow: `0 0 0 1px ${cssTheme.colors.colors.primary[700]}`,
  },
}));

/**
 * States
 */
export const rest = style(({ theme, cssTheme }: Theme) => ({}));
export const loading = style(({ theme, cssTheme }: Theme) => ({}));
export const disabled = style(({ theme, cssTheme }: Theme) => ({}));

/**
 *
 * Variants
 *
 */

/**
 * Primary
 */
export const primary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.components.buttons.var.variants.primary.textColor,
  border: `2px solid ${cssTheme.components.buttons.var.variants.primary.borderColor}`,
  backgroundColor: cssTheme.colors.var.colors.primary[500],
  selectors: {
    '&:active': {
      filter: `brightness(90%)`,
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: cssTheme.colors.colorIntents.disabledText,
      borderColor: cssTheme.colors.colorIntents.backgroundDisabled,
      backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
    },
  },
}));
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.components.buttons.var.variants.primaryReversed.textColor,
    border: `2px solid ${cssTheme.colors.colorIntents.primary}`,
    backgroundColor: cssTheme.colors.colorIntents.primary,
  })
);
globalStyle(
  `${globalThemeReversedSelector} ${primary}:active, ${primaryReversed}:active`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.primary[700],
  })
);

/**
 * Secondary
 */
export const secondary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.primary,
  border: `2px solid ${cssTheme.colors.colorIntents.primary}`,
  selectors: {
    '&:active': {
      backgroundColor: cssTheme.colors.colors.primary[100],
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: cssTheme.colors.colorIntents.disabledText,
      borderColor: cssTheme.colors.colorIntents.backgroundDisabled,
      backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
    },
  },
}));
export const secondaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${secondary}, ${secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryReversed,
    border: `2px solid ${cssTheme.colors.colorIntents.primaryReversed}`,
    backgroundColor: cssTheme.colors.colorIntents.transparent,
  })
);
globalStyle(
  `${globalThemeReversedSelector} ${secondary}:active, ${secondaryReversed}:active`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[100],
  })
);

/**
 * Tertiary
 */
export const tertiary = style(({ theme, cssTheme }: Theme) => ({
  color: cssTheme.colors.colorIntents.primary,
  selectors: {
    '&:active': {
      backgroundColor: cssTheme.colors.colors.primary[100],
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: cssTheme.colors.colorIntents.disabledText,
      backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
    },
  },
}));
export const tertiaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${tertiary}, ${tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryReversed,
    border: `2px solid ${cssTheme.colors.colorIntents.transparent}`,
    backgroundColor: cssTheme.colors.colorIntents.transparent,
  })
);
globalStyle(
  `${globalThemeReversedSelector} ${tertiary}:active, ${tertiaryReversed}:active`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.grey[100],
  })
);

/**
 * Sizes
 */
export const large = style(({ theme, cssTheme }: Theme) => ({
  height: `calc(2 * ${cssTheme.sizing.var.x3} + ${
    cssTheme.typography.labels.mobile.medium.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${cssTheme.sizing.var.x3} + ${
    cssTheme.typography.labels.mobile.medium.capHeight
  }px + ${4}px)`,
  padding: `${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x3}`,
  fontSize: cssTheme.typography.labels.mobile.medium.capsize?.fontSize,
  borderRadius: cssTheme.components.buttons.var.sizes.large.border?.default?.radius,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      height: `calc(2 * ${cssTheme.sizing.var.x3} + ${
        cssTheme.typography.labels.tablet.medium.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x3} + ${
        cssTheme.typography.labels.tablet.medium.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.tablet.medium.capsize?.fontSize,
    },
    [cssTheme.layout.media.desktopSmall]: {
      height: `calc(2 * ${cssTheme.sizing.var.x3} + ${
        cssTheme.typography.labels.desktop.medium.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x3} + ${
        cssTheme.typography.labels.desktop.medium.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.desktop.medium.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${cssTheme.sizing.var.x3} + (${iconSize} - ${cssTheme.sizing.var.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      padding: `${cssTheme.sizing.var.x3} ${iconPadding} ${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x3}`,
    },
    '&[dataicon="left"]': {
      padding: `${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x3} ${iconPadding}`,
    },
  },
}));
export const collapsePaddingLeft = style(({ theme, cssTheme }: Theme) => ({}));
export const medium = style(({ theme, cssTheme }: Theme) => ({
  height: `calc(2 * ${cssTheme.sizing.var.x2} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${cssTheme.sizing.var.x2} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2}`,
  fontSize: cssTheme.typography.labels.mobile.small.capsize?.fontSize,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      height: `calc(2 * ${cssTheme.sizing.var.x2} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x2} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
    },
    [cssTheme.layout.media.desktopSmall]: {
      height: `calc(2 * ${cssTheme.sizing.var.x2} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x2} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${cssTheme.sizing.var.x2} + (${iconSize} - ${cssTheme.sizing.var.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      padding: `${cssTheme.sizing.var.x2} ${iconPadding} ${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2} `,
    },
    '&[dataicon="left"]': {
      padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2} ${iconPadding}`,
    },
  },
}));
export const small = style(({ theme, cssTheme }: Theme) => ({
  height: `calc(2 * ${cssTheme.sizing.var.x1} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${cssTheme.sizing.var.x1} + ${
    cssTheme.typography.labels.mobile.small.capHeight
  }px + ${4}px)`,
  padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
  fontSize: cssTheme.typography.labels.mobile.small.capsize?.fontSize,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      height: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.tablet.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
    },
    [cssTheme.layout.media.desktopSmall]: {
      height: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.desktop.small.capHeight
      }px + ${4}px)`,
      fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${cssTheme.sizing.var.x2} + (${iconSize} - ${cssTheme.sizing.var.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      padding: `${cssTheme.sizing.var.x1} ${iconPadding} ${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
    },
    '&[dataicon="left"]': {
      padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2} ${iconPadding}`,
    },
  },
}));
export const xSmall = style(({ theme, cssTheme }: Theme) => ({
  height: `calc(2 * ${cssTheme.sizing.var.x1} + ${
    cssTheme.typography.labels.mobile.xSmall.capHeight
  }px + ${4}px)`,
  minWidth: `calc(2 * ${cssTheme.sizing.var.x1} + ${
    cssTheme.typography.labels.mobile.xSmall.capHeight
  }px + ${4}px)`,
  padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x1}`,
  fontSize: cssTheme.typography.labels.mobile.xSmall.capsize?.fontSize,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      fontSize: cssTheme.typography.labels.tablet.xSmall.capsize?.fontSize,
    },
    [cssTheme.layout.media.desktopSmall]: {
      fontSize: cssTheme.typography.labels.desktop.xSmall.capsize?.fontSize,
    },
  },
  selectors: {
    '&[datapaddingcollapse="left"]': {
      marginLeft: `calc(-1 * ${cssTheme.sizing.var.x1} + (${iconSize} - ${cssTheme.sizing.var.x3}) / 2)`,
    },
    '&[dataicon="right"]': {
      height: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.tablet.xSmall.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.tablet.xSmall.capHeight
      }px + ${4}px)`,
      padding: `${cssTheme.sizing.var.x1} ${iconPadding} ${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x1}`,
    },
    '&[dataicon="left"]': {
      height: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.desktop.xSmall.capHeight
      }px + ${4}px)`,
      minWidth: `calc(2 * ${cssTheme.sizing.var.x1} + ${
        cssTheme.typography.labels.desktop.xSmall.capHeight
      }px + ${4}px)`,
      padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x1} ${iconPadding}`,
    },
  },
}));

/**
 * Icon
 */
export const iconBase = style(({ theme, cssTheme }: Theme) => ({
  position: 'absolute',
  height: iconSize,
  width: iconSize,
}));
export const icon = style(({ theme, cssTheme }: Theme) => ({
  top: `calc(50% - ${iconSize} / 2)`,
  left: `calc(50% - ${iconSize} / 2)`,
}));
export const right = style(({ theme, cssTheme }: Theme) => ({
  top: `calc(50% - ${iconSize} / 2)`,
  right: `0.8em`,
}));
export const left = style(({ theme, cssTheme }: Theme) => ({
  top: `calc(50% - ${iconSize} / 2)`,
  left: `0.8em`,
}));
