import { createVar, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { colorVars, layoutCSS, typographyVars } from '../default-theme/default-theme.css';

/**
 *
 * Vars
 *
 */

const iconSize = createVar();
const iconMargin = createVar();
const iconColor = createVar();
const iconColorDisabled = createVar();

const paddingX = createVar();
const paddingY = createVar();
const height = createVar();

const borderWidth = createVar();
const borderColor = createVar();
const borderColorActive = createVar();
const borderColorDisabled = createVar();
const borderRadius = createVar();

const backgroundColor = createVar();
const backgroundColorActive = createVar();
const backgroundColorDisabled = createVar();

const textColor = createVar();
const textColorActive = createVar();
const textColorDisabled = createVar();

/**
 *
 * Variants
 *
 */

export const variants = recipe({
  base: {
    /**
     *
     * Reset and base CSS
     *
     */

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    outline: 'none',
    lineHeight: 0,
    cursor: 'pointer',
    appearance: 'none',
    userSelect: 'none',
    touchAction: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',

    /**
     *
     * Box model
     *
     */

    width: 'fit-content',
    minWidth: height,
    height: height,
    paddingLeft: paddingX,
    paddingRight: paddingX,
    margin: 0,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    borderRadius: borderRadius,
    outline: 'none',

    /**
     *
     * Content
     *
     */

    // don't text or content to wrap
    whiteSpace: 'nowrap',

    /**
     *
     * Colors
     *
     */

    color: textColor,
    backgroundColor: backgroundColor,
    borderColor: borderColor,

    /**
     *
     * Effects
     *
     */

    /**
     *
     * Interaction & states
     *
     */

    cursor: 'pointer',
    transition: `transform 0.1s ease-in`,
    userSelect: 'none',
    touchAction: `pan-y pan-x`,

    selectors: {
      '&:active': {
        color: textColorActive,
        backgroundColor: backgroundColorActive,
        borderColor: borderColorActive,

        transform: `translateY(1px)`,
      },

      '&[disabled]': {
        color: textColorDisabled,
        backgroundColor: backgroundColorDisabled,
        borderColor: borderColorDisabled,

        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    /**
     *
     * Variants
     *
     */

    variant: {
      primary: {
        vars: {
          [iconColor]: colorVars.colors.grey[700],
          [iconColorDisabled]: colorVars.colorIntents.disabledText,
          [textColor]: colorVars.colorIntents.primaryText,
          [textColorActive]: colorVars.colorIntents.primary,
          [textColorDisabled]: colorVars.colors.grey[600],
          [borderColor]: colorVars.colorIntents.primary,
          [borderColorDisabled]: `transparent`,
          [backgroundColor]: colorVars.colors.grey[0],
          [backgroundColorActive]: colorVars.colors.primary[100],
          [backgroundColorDisabled]: colorVars.colors.grey[25],
        },
      },
      secondary: {},
      tertiary: {},
    },
    /**
     *
     * Sizes
     *
     */

    size: {
      small: {
        vars: {
          [paddingX]: buttonsVars.sizes.large.padding.left,
          [height]: buttonsVars.sizes.large.height,
          [iconSize]: buttonsVars.sizes.large.iconSize,
          [iconMargin]: buttonsVars.sizes.large.iconMargin.right,
          [borderWidth]: buttonsVars.sizes.large.border.default.width,
          [borderStyle]: buttonsVars.sizes.large.border.default.style,
          [borderRadius]: buttonsVars.sizes.large.border.default.radius,
        },
        fontSize: typographyVars.labels.mobile.small.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.labels.tablet.small.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.labels.desktop.small.capsize.fontSize,
          },
        },
      },
      medium: {
        vars: {
          [paddingX]: buttonsVars.sizes.medium.padding.left,
          [height]: buttonsVars.sizes.medium.height,
          [iconSize]: buttonsVars.sizes.medium.iconSize,
          [iconMargin]: buttonsVars.sizes.medium.iconMargin.right,
          [borderWidth]: buttonsVars.sizes.medium.border.default.width,
          [borderStyle]: buttonsVars.sizes.medium.border.default.style,
          [borderRadius]: buttonsVars.sizes.medium.border.default.radius,
        },
        fontSize: typographyVars.labels.mobile.small.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.labels.tablet.small.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.labels.desktop.small.capsize.fontSize,
          },
        },
      },
      small: {
        vars: {
          [paddingX]: buttonsVars.sizes.small.padding.left,
          [height]: buttonsVars.sizes.small.height,
          [iconSize]: buttonsVars.sizes.small.iconSize,
          [iconMargin]: buttonsVars.sizes.small.iconMargin.right,
          [borderWidth]: buttonsVars.sizes.small.border.default.width,
          [borderStyle]: buttonsVars.sizes.small.border.default.style,
          [borderRadius]: buttonsVars.sizes.small.border.default.radius,
        },
        fontSize: typographyVars.labels.mobile.small.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.labels.tablet.small.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.labels.desktop.small.capsize.fontSize,
          },
        },
      },
      xSmall: {
        vars: {
          [paddingX]: buttonsVars.sizes.xSmall.padding.left,
          [height]: buttonsVars.sizes.xSmall.height,
          [iconSize]: buttonsVars.sizes.xSmall.iconSize,
          [iconMargin]: buttonsVars.sizes.xSmall.iconMargin.right,
          [borderWidth]: buttonsVars.sizes.xSmall.border.default.width,
          [borderStyle]: buttonsVars.sizes.xSmall.border.default.style,
          [borderRadius]: buttonsVars.sizes.xSmall.border.default.radius,
        },
        fontSize: typographyVars.labels.mobile.small.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.labels.tablet.small.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.labels.desktop.small.capsize.fontSize,
          },
        },
      },
    },
  },
});

/**
 *
 * Typography
 *
 */

export const text = style({
  fontFamily: typographyVars.labels.font,
  userSelect: 'none',
});

/**
 *
 * Base
 *
 */

export const styleVariants = recipe({
  base: {
    position: 'relative',
    padding: `0 calc(${iconSize} + 2 * ${iconOffset}) 0 ${paddingX}`,
    height: height,
    lineHeight: `calc(${height} - 2 * ${borderWidth})`,
    minWidth: `100%`,
    width: 'fit-content',
    verticalAlign: 'middle',
    ':focus': {
      boxShadow: `0 0 1px 1px ${colorVars.colors.primary[300]}`,
    },
    '::-webkit-input-placeholder': {
      color: colorVars.colors.grey[200],
      verticalAlign: 'middle',
      lineHeight: height,
    },

    borderStyle: 'solid',
    borderWidth: borderWidth,
    borderRadius: borderRadius,

    color: textColor,
    backgroundColor: backgroundColor,

    outline: 'none',
    whiteSpace: 'nowrap',

    cursor: 'auto',
    appearance: 'none',

    userSelect: 'auto',
    touchAction: 'none',
    WebkitAppearance: 'none',

    transition: `box-shadow 0.3s ease-out`,
  },
  variants: {
    /**
     * Variants
     */
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    /**
     * Sizes
     */
    size: {
      small: {},
      medium: {},
      large: {},
    },
    /**
     * Icons
     */
    icon: {
      left: { paddingLeft: `calc(2 * ${paddingX} + ${iconSize})` },
      right: { paddingRight: `calc(2 * ${paddingX} + ${iconSize})` },
    },
    /**
     * States (internal)
     */
    state: {
      rest: {},
      focused: {
        color: textColorActive,
        borderColor: borderColorActive,
        backgroundColor: backgroundColorActive,
      },
    },
    /**
     * Validity states
     */
    validity: {
      neutral: {},
      valid: {
        boxShadow: `0 0 0 1px ${colorVars.colorIntents.successAction}`,
      },
      warning: {
        boxShadow: `0 0 0 1px ${colorVars.colorIntents.warningAction}`,
      },
      error: {
        boxShadow: `0 0 0 1px ${colorVars.colorIntents.dangerAction}`,
      },
    },
    /**
     * Loading states
     */
    loading: {
      true: {},
      false: {},
    },
    /**
     * Disabled states
     */
    disabled: {
      true: {
        cursor: 'not-allowed',
        color: textColorDisabled,
        borderColor: borderColorDisabled,
        backgroundColor: backgroundColorDisabled,
        ':focus': {
          outline: 'none',
          boxShadow: 'none',
        },
      },
      false: {},
    },
  },
});

export type InputVariants = RecipeVariants<typeof styleVariants>;

/**
 *
 * Icons
 *
 */

export const iconVariants = recipe({
  base: {
    color: iconColor,
    position: 'relative',
    height: iconSize,
    width: iconSize,
    pointerEvents: 'none', // let events go through
  },
  variants: {
    /**
     * Icon position
     */
    position: {
      left: { marginRight: iconMargin },
      right: { marginLeft: iconMargin },
    },
    /**
     * Disabled states
     */
    disabled: {
      true: {
        color: iconColorDisabled,
      },
      false: {},
    },
  },
});

export type InputIconVariants = RecipeVariants<typeof iconVariants>;
