import { createVar, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { colorVars, layoutCSS, typographyVars } from '../theme/default-theme.css';


/**
 *
 * Vars
 *
 */

const iconSize = createVar();
const iconOffset = createVar();
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

export const getWrapperStyles = recipe({
  base: {
    vars: {
      [iconSize]: `clamp(16px, 1em, 28px)`,
      [iconOffset]: `0.6em`,
      [iconColor]: colorVars.colors.grey[700],
      [iconColorDisabled]: colorVars.colorIntents.disabledText,
      [paddingX]: `0.5em`,
      [paddingY]: `0px`,
      [borderWidth]: `1px`,
      [borderRadius]: `4px`,
      [textColor]: colorVars.colorIntents.primaryText,
      [textColorActive]: colorVars.colorIntents.primary,
      [textColorDisabled]: colorVars.colors.grey[600],
      [borderColor]: colorVars.colorIntents.primary,
      [borderColorDisabled]: `transparent`,
      [backgroundColor]: colorVars.colors.grey[0],
      [backgroundColorActive]: colorVars.colors.primary[100],
      [backgroundColorDisabled]: colorVars.colors.grey[25],
    },

    position: 'relative',
    height: 'fit-content',
  },
  variants: {
    /**
     * Variants
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
     * Sizes
     */
    size: {
      small: {
        vars: {
          [height]: `2.2em`,
          [iconOffset]: `0.6em`,
          [paddingX]: `0.6em`,
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
          [height]: `2.6em`,
          [iconOffset]: `0.7em`,
          [paddingX]: `0.7em`,
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
      large: {
        vars: {
          [height]: `4em`,
          [iconOffset]: `0.9em`,
          [paddingX]: `0.9em`,
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

export const getInputStyles = recipe({
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
    loading: {
      true: {},
      false: {},
    },
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

export type InputVariants = RecipeVariants<typeof getInputStyles>;

/**
 *
 * Icons
 *
 */

export const icon = style({
  position: 'absolute',
  height: iconSize,
  width: iconSize,
  top: `calc(50% - ${iconSize} / 2)`,
  zIndex: 1,
  pointerEvents: 'none', // let events go through
});

export const getInputIconStyles = recipe({
  base: {
    color: iconColor,
  },
  variants: {
    /**
     * Position
     */
    position: {
      left: { left: paddingX },
      right: { right: iconOffset },
    },
    disabled: {
      true: {
        color: iconColorDisabled,
      },
      false: {},
    },
  },
});

export type InputIconVariants = RecipeVariants<typeof getInputIconStyles>;
