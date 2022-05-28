import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colorVars, layoutCSS, typographyVars } from '../../default-theme/src/theme';

/**
 *
 * Tag wrapper
 *
 */

export const base = style({
  display: 'flex',

  width: 'fit-content',
  padding: `4px 5px`,
  margin: `0px 2px`,

  maxWidth: '100%', // ensure it respect the parent's width
  wordBreak: 'normal',
  verticalAlign: 'middle',

  border: `1px solid`,
  borderRadius: 6,
  borderColor: colorVars.colors.grey[300],

  color: colorVars.colors.grey[700],
  boxShadow: `inset 0 -1px 0 ${colorVars.colors.grey[100]}`,
  backgroundColor: colorVars.colorIntents.elevation1,

  fontFamily: typographyVars.fonts.monospace,
  ...createStyleObject(typographyVars.labels.mobile.small.capsize),
  '@media': {
    [layoutCSS.media.tablet]: createStyleObject(typographyVars.labels.tablet.small.capsize),
    [layoutCSS.media.desktopSmall]: createStyleObject(typographyVars.labels.desktop.small.capsize),
  },
});

export const variants = recipe({});
