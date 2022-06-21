import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colorVars, layoutCSS, typographyVars } from '../default-theme/src/theme.js';

/**
 *
 * Vars
 *
 */

const paddingX = createVar();
const paddingY = createVar();

const borderWidth = createVar();
const borderColor = createVar();

const textColor = createVar();

export const variants = recipe({
  base: {
    vars: {
      [paddingX]: `2em`,
      [paddingY]: `1em`,
      [textColor]: colorVars.colorIntents.primaryText,
      [borderWidth]: `1px`,
      [borderColor]: colorVars.colors.grey[100],
    },

    position: 'relative',

    height: 'fit-content',
    paddingLeft: 0,
    paddingRight: paddingX,
    paddingTop: paddingY,
    paddingBottom: paddingY,
    borderBottomStyle: 'solid',
    borderBottomWidth: borderWidth,
    borderColor: borderColor,

    color: textColor,
    fontFamily: typographyVars.labels.fontFamily,
    fontWeight: typographyVars.labels.fontWeight as any,

    wordBreak: 'normal',
    verticalAlign: 'middle',
    userSelect: 'text',
    whiteSpace: 'nowrap',

    /**
     * Table text alignment
     */
    textAlign: 'left',
    selectors: {
      ['&[align="center"]']: {
        textAlign: 'center',
      },
      ['&[align="right"]']: {
        textAlign: 'right',
      },
    },
  },
  variants: {
    /**
     * Sizes
     */
    size: {
      xSmall: {
        vars: {
          [paddingY]: `0.6em`,
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
          [paddingY]: `0.6em`,
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
          [paddingY]: `0.7em`,
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
