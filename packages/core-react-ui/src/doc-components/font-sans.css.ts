import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { getCSSTextStyles } from '../utilities-theme/text.utilities';

export const wrapper = style({});

export const lettersSans = style({
  ...createStyleObject({
    fontMetrics: typographyVars.fonts.sans[0].fontMetrics,
    capHeight: 100,
    lineGap: 10,
  }),
  fontFamily: typographyVars.fonts.sans[0].name,
});

export const paragraphSans = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
  fontFamily: typographyVars.fonts.sans[0].name,
});

export const letters = style({
  fontWeight: 400,
});

export const lettersMedium = style({
  fontWeight: 500,
});

export const lettersBold = style({
  fontWeight: 600,
});
