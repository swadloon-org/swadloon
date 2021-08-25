import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { px } from '../utilities/utilities';

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
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
  backgroundColor: cssTheme.colors.var.colors.primary[500],
  selectors: {
    '&:active': {
      filter: `brightness(90%)`,
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      color: cssTheme.colors.colorIntents.disabledText,
      backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
    },
  },
}));
export const primaryOff = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colors.grey[400],
}));
export const primaryReversed = style(({ theme, cssTheme }: Theme) => ({}));
globalStyle(
  `${globalThemeReversedSelector} ${primary}, ${primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: cssTheme.components.buttons.var.variants.primaryReversed.textColor,
    backgroundColor: cssTheme.colors.var.colors.primary[500],
  })
);
globalStyle(
  `${globalThemeReversedSelector} ${primary}:active, ${primaryReversed}:active`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.primary[700],
  })
);
globalStyle(
  `${globalThemeReversedSelector} ${primary}[disabled], ${primaryReversed}[disabled]`,
  ({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
  })
);

const thumbSize = 20;
const iconSize = 16;
const paddingSide = 3;
const paddingTopBottom = 3;
const spacingBetweenThumbs = 2;
const width = 2 * paddingSide + 2 * thumbSize + spacingBetweenThumbs;
const height = 2 * paddingTopBottom + 1 * thumbSize;

/**
 * Sizes
 */
export const medium = style(({ theme, cssTheme }: Theme) => ({
  height: px({ value: height }),
  width: px({ value: width }),

  borderRadius: `24px`,
}));

export const thumb = style(({ theme, cssTheme }: Theme) => ({
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
}));

export const thumbOff = style(({ theme, cssTheme }: Theme) => ({
  transform: 'translateX(3px)',
}));

/**
 * Icons
 */

export const icon = style(({ theme, cssTheme }: Theme) => ({
  display: 'block',
  position: 'absolute',
  zIndex: 1,
  fill: cssTheme.colors.colors.grey[700],
  stroke: cssTheme.colors.colors.grey[700],
  height: iconSize,
  width: iconSize,
}));
export const iconRight = style(({ theme, cssTheme }: Theme) => ({
  right: paddingSide + 2,
  top: 5,
}));
export const iconLeft = style(({ theme, cssTheme }: Theme) => ({
  left: paddingSide + 2,
  top: 5,
}));
