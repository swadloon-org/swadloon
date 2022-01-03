import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colorVars, layoutCSS, typographyVars } from '../theme';

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

export const getVariantStyles = recipe({
  base: {
    vars: {
      [paddingX]: `2em`,
      [paddingY]: `1em`,
      [borderWidth]: `1px`,
      [borderColor]: colorVars.colors.grey[100],
      [textColor]: colorVars.colorIntents.primaryText,
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
    fontFamily: typographyVars.paragraphs.font,

    wordBreak: 'normal',
    verticalAlign: 'middle',
    userSelect: 'text',

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
          [paddingY]: `0.5em`,
        },
        fontSize: typographyVars.paragraphs.mobile.small.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.paragraphs.tablet.small.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.paragraphs.desktop.small.capsize.fontSize,
          },
        },
      },
      small: {
        vars: {
          [paddingY]: `1.3em`,
        },
        fontSize: typographyVars.paragraphs.mobile.small.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.paragraphs.tablet.small.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.paragraphs.desktop.small.capsize.fontSize,
          },
        },
      },
      medium: {
        vars: {
          [paddingY]: `1.6em`,
        },
        fontSize: typographyVars.paragraphs.mobile.small.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.paragraphs.tablet.small.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.paragraphs.desktop.small.capsize.fontSize,
          },
        },
      },
      large: {
        vars: {
          [paddingY]: `2em`,
        },
        fontSize: typographyVars.paragraphs.mobile.medium.capsize.fontSize,
        '@media': {
          [layoutCSS.media.tablet]: {
            fontSize: typographyVars.paragraphs.tablet.medium.capsize.fontSize,
          },
          [layoutCSS.media.desktopSmall]: {
            fontSize: typographyVars.paragraphs.desktop.medium.capsize.fontSize,
          },
        },
      },
    },
  },
});
