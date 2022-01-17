import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { getCSSTextStyles } from '../utilities-theme/text.utilities';

export const wrapper = style({});

export const lettersSansSerif = style({
  ...createStyleObject({
    fontMetrics: typographyVars.fonts.serif[0].fontMetrics,
    capHeight: 80,
    lineGap: 10,
  }),
  fontFamily: typographyVars.fonts.serif[0].name,
});

export const paragraphSerif = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
  fontFamily: cssTheme.typography.fonts.serif,
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
