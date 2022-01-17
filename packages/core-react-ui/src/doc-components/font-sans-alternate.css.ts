import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { getCSSTextStyles } from '../utilities-theme/text.utilities';

export const wrapper = style({});

export const lettersSansAlternate = style({
  ...createStyleObject({
    fontMetrics: typographyVars.fonts.sansAlternate[0].fontMetrics,
    capHeight: 100,
    lineGap: 10,
  }),
  fontFamily: typographyVars.fonts.sansAlternate[0].name,
});

export const paragraphSansAlternate = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
  fontFamily: cssTheme.typography.fonts.sansAlternate,
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
