import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { typographyVars } from '../theme.js';

export const wrapper = style({});

export const lettersSansAlternate = style({
  fontSize: 30,
  fontFamily: typographyVars.fonts.sansAlternate,
});

export const paragraphSansAlternate = style({
  ...createStyleObject(typographyVars.paragraphs.desktop.medium.capsize),
  fontFamily: typographyVars.fonts.sansAlternate,
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
