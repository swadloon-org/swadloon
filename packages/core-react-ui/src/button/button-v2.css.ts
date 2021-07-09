import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';

const iconSize = `1.5em`;
const iconPadding = `3em`;

/**
 * Base
 */

import { composeStyles, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { buttonsVars } from '../theme/default-theme.css';

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
  ':focus': {
    // boxShadow: `0 0 0 1px ${cssTheme.colors.colors.primary[700]}`,
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

export const primary = composeStyles(
  base,
  style({
    color: buttonsVars.buttons.variants.primary.textColor,
    backgroundColor: buttonsVars.buttons.variants.primary.backgroundColor,
  })
);

/**
 *
 * Sizes
 *
 */

export const large = style({
  padding: buttonsVars.buttons.sizes.medium.padding.default,
  borderWidth: buttonsVars.buttons.sizes.large.border.default.width,
});

export const medium = style({
  padding: buttonsVars.buttons.sizes.medium.padding.default,
  borderWidth: buttonsVars.buttons.sizes.medium.border.default.width,
});

export const small = style({
  padding: buttonsVars.buttons.sizes.medium.padding.default,
});

export const xSmall = style({
  padding: buttonsVars.buttons.sizes.medium.padding.default,
});
