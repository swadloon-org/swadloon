import { createVar, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import {
  buttonsVars,
  layoutCSS,
  sizeVars,
  typographyVars,
} from '../default-theme/default-theme.css';

/**
 *
 * Vars
 *
 */

const paddingX = createVar();
const paddingIcon = createVar();
const paddingOnlyIcon = createVar();
const height = createVar();

const textColor = createVar();
const textColorActive = createVar();
const textColorDisabled = createVar();

const iconSize = createVar();
const iconMargin = createVar();
const iconColor = createVar();
const iconColorActive = createVar();
const iconColorDisabled = createVar();

const borderWidth = createVar();
const borderStyle = createVar();
const borderColor = createVar();
const borderColorActive = createVar();
const borderColorDisabled = createVar();
const borderRadius = createVar();

const outlineColor = createVar();
const outlineColorActive = createVar();
const outlineColorDisabled = createVar();

const backgroundColor = createVar();
const backgroundColorActive = createVar();
const backgroundColorDisabled = createVar();

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
    lineHeight: 0,
    appearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    textShadow: 'none',

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

      /**
       *
       * Collapse paddings
       *
       */

      '&[datapaddingcollapse="left"]': {
        marginLeft: `calc(-1 * ${paddingX})`,
      },
      '&[datapaddingcollapse="right"]': {
        marginRight: `calc(-1 * ${paddingX})`,
      },
      '&[datapaddingcollapse="left-icon"]': {
        marginLeft: `calc(-1 * ${paddingIcon})`,
      },
      '&[datapaddingcollapse="right-icon"]': {
        marginRight: `calc(-1 * ${paddingIcon})`,
      },

      /**
       *
       * Specific padding for icon buttons
       *
       */

      '&[dataicon="icon"]': {
        paddingLeft: paddingOnlyIcon,
        paddingRight: paddingOnlyIcon,
      },
      '&[dataicon="right"]': {
        paddingRight: paddingIcon,
      },
      '&[dataicon="left"]': {
        paddingLeft: paddingIcon,
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
          [textColor]: buttonsVars.variants.primary.textColor,
          [textColorActive]: buttonsVars.variants.primary.textColorActive,
          [textColorDisabled]: buttonsVars.variants.primary.textColorDisabled,
          [iconColor]: buttonsVars.variants.primary.iconColor,
          [iconColorActive]: buttonsVars.variants.primary.iconColorActive,
          [iconColorDisabled]: buttonsVars.variants.primary.iconColorDisabled,
          [backgroundColor]: buttonsVars.variants.primary.backgroundColor,
          [backgroundColorActive]: buttonsVars.variants.primary.backgroundColorActive,
          [backgroundColorDisabled]: buttonsVars.variants.primary.backgroundColorDisabled,
          [borderColor]: buttonsVars.variants.primary.borderColor,
          [borderColorActive]: buttonsVars.variants.primary.borderColorActive,
          [borderColorDisabled]: buttonsVars.variants.primary.borderColorDisabled,
          [outlineColor]: buttonsVars.variants.primary.outlineColor,
          [outlineColorActive]: buttonsVars.variants.primary.outlineColorActive,
          [outlineColorDisabled]: buttonsVars.variants.primary.outlineColorDisabled,
        },
      },
      secondary: {
        vars: {
          [textColor]: buttonsVars.variants.secondary.textColor,
          [textColorActive]: buttonsVars.variants.secondary.textColorActive,
          [textColorDisabled]: buttonsVars.variants.secondary.textColorDisabled,
          [iconColor]: buttonsVars.variants.secondary.iconColor,
          [iconColorActive]: buttonsVars.variants.secondary.iconColorActive,
          [iconColorDisabled]: buttonsVars.variants.secondary.iconColorDisabled,
          [backgroundColor]: buttonsVars.variants.secondary.backgroundColor,
          [backgroundColorActive]: buttonsVars.variants.secondary.backgroundColorActive,
          [backgroundColorDisabled]: buttonsVars.variants.secondary.backgroundColorDisabled,
          [borderColor]: buttonsVars.variants.secondary.borderColor,
          [borderColorActive]: buttonsVars.variants.secondary.borderColorActive,
          [borderColorDisabled]: buttonsVars.variants.secondary.borderColorDisabled,
          [outlineColor]: buttonsVars.variants.secondary.outlineColor,
          [outlineColorActive]: buttonsVars.variants.secondary.outlineColorActive,
          [outlineColorDisabled]: buttonsVars.variants.secondary.outlineColorDisabled,
        },
      },
      tertiary: {
        vars: {
          [textColor]: buttonsVars.variants.tertiary.textColor,
          [textColorActive]: buttonsVars.variants.tertiary.textColorActive,
          [textColorDisabled]: buttonsVars.variants.tertiary.textColorDisabled,
          [iconColor]: buttonsVars.variants.tertiary.iconColor,
          [iconColorActive]: buttonsVars.variants.tertiary.iconColorActive,
          [iconColorDisabled]: buttonsVars.variants.tertiary.iconColorDisabled,
          [backgroundColor]: buttonsVars.variants.tertiary.backgroundColor,
          [backgroundColorActive]: buttonsVars.variants.tertiary.backgroundColorActive,
          [backgroundColorDisabled]: buttonsVars.variants.tertiary.backgroundColorDisabled,
          [borderColor]: buttonsVars.variants.tertiary.borderColor,
          [borderColorActive]: buttonsVars.variants.tertiary.borderColorActive,
          [borderColorDisabled]: buttonsVars.variants.tertiary.borderColorDisabled,
          [outlineColor]: buttonsVars.variants.tertiary.outlineColor,
          [outlineColorActive]: buttonsVars.variants.tertiary.outlineColorActive,
          [outlineColorDisabled]: buttonsVars.variants.tertiary.outlineColorDisabled,
        },
      },
      positive: {
        vars: {
          [textColor]: buttonsVars.variants.positive.textColor,
          [textColorActive]: buttonsVars.variants.positive.textColorActive,
          [textColorDisabled]: buttonsVars.variants.positive.textColorDisabled,
          [iconColor]: buttonsVars.variants.positive.iconColor,
          [iconColorActive]: buttonsVars.variants.positive.iconColorActive,
          [iconColorDisabled]: buttonsVars.variants.positive.iconColorDisabled,
          [backgroundColor]: buttonsVars.variants.positive.backgroundColor,
          [backgroundColorActive]: buttonsVars.variants.positive.backgroundColorActive,
          [backgroundColorDisabled]: buttonsVars.variants.positive.backgroundColorDisabled,
          [borderColor]: buttonsVars.variants.positive.borderColor,
          [borderColorActive]: buttonsVars.variants.positive.borderColorActive,
          [borderColorDisabled]: buttonsVars.variants.positive.borderColorDisabled,
          [outlineColor]: buttonsVars.variants.positive.outlineColor,
          [outlineColorActive]: buttonsVars.variants.positive.outlineColorActive,
          [outlineColorDisabled]: buttonsVars.variants.positive.outlineColorDisabled,
        },
      },
      warning: {
        vars: {
          [textColor]: buttonsVars.variants.warning.textColor,
          [textColorActive]: buttonsVars.variants.warning.textColorActive,
          [textColorDisabled]: buttonsVars.variants.warning.textColorDisabled,
          [iconColor]: buttonsVars.variants.warning.iconColor,
          [iconColorActive]: buttonsVars.variants.warning.iconColorActive,
          [iconColorDisabled]: buttonsVars.variants.warning.iconColorDisabled,
          [backgroundColor]: buttonsVars.variants.warning.backgroundColor,
          [backgroundColorActive]: buttonsVars.variants.warning.backgroundColorActive,
          [backgroundColorDisabled]: buttonsVars.variants.warning.backgroundColorDisabled,
          [borderColor]: buttonsVars.variants.warning.borderColor,
          [borderColorActive]: buttonsVars.variants.warning.borderColorActive,
          [borderColorDisabled]: buttonsVars.variants.warning.borderColorDisabled,
          [outlineColor]: buttonsVars.variants.warning.outlineColor,
          [outlineColorActive]: buttonsVars.variants.warning.outlineColorActive,
          [outlineColorDisabled]: buttonsVars.variants.warning.outlineColorDisabled,
        },
      },
      danger: {
        vars: {
          [textColor]: buttonsVars.variants.danger.textColor,
          [textColorActive]: buttonsVars.variants.danger.textColorActive,
          [textColorDisabled]: buttonsVars.variants.danger.textColorDisabled,
          [iconColor]: buttonsVars.variants.danger.iconColor,
          [iconColorActive]: buttonsVars.variants.danger.iconColorActive,
          [iconColorDisabled]: buttonsVars.variants.danger.iconColorDisabled,
          [backgroundColor]: buttonsVars.variants.danger.backgroundColor,
          [backgroundColorActive]: buttonsVars.variants.danger.backgroundColorActive,
          [backgroundColorDisabled]: buttonsVars.variants.danger.backgroundColorDisabled,
          [borderColor]: buttonsVars.variants.danger.borderColor,
          [borderColorActive]: buttonsVars.variants.danger.borderColorActive,
          [borderColorDisabled]: buttonsVars.variants.danger.borderColorDisabled,
          [outlineColor]: buttonsVars.variants.danger.outlineColor,
          [outlineColorActive]: buttonsVars.variants.danger.outlineColorActive,
          [outlineColorDisabled]: buttonsVars.variants.danger.outlineColorDisabled,
        },
      },
    },
    /**
     *
     * Sizes
     *
     */

    size: {
      large: {
        vars: {
          [paddingX]: buttonsVars.sizes.large.padding.left,
          [paddingIcon]: buttonsVars.sizes.large.iconPadding,
          [paddingOnlyIcon]: buttonsVars.sizes.large.iconOnlyPadding,
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
          [paddingIcon]: buttonsVars.sizes.medium.iconPadding,
          [paddingOnlyIcon]: buttonsVars.sizes.medium.iconOnlyPadding,
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
          [paddingIcon]: buttonsVars.sizes.small.iconPadding,
          [paddingOnlyIcon]: buttonsVars.sizes.small.iconOnlyPadding,
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
          [paddingIcon]: buttonsVars.sizes.xSmall.iconPadding,
          [paddingOnlyIcon]: buttonsVars.sizes.xSmall.iconOnlyPadding,
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

export const labelVariants = recipe({
  base: {
    fontFamily: typographyVars.labels.font,
    userSelect: 'none',
    pointerEvents: 'none',
    width: `100%`,
  },
  variants: {
    /**
     * Text alignment
     */
    alignment: {
      center: { textAlign: 'center' },
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
    },
  },
});

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
