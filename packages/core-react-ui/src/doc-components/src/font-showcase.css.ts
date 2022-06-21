import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { typographyVars } from '../theme.js';

export const wrapper = style({});

export const lettersSans = style({
  fontSize: 30,
  fontFamily: typographyVars.fonts.sans,
});

export const paragraphSans = style({
  ...createStyleObject(typographyVars.paragraphs.desktop.medium.capsize),
  fontFamily: typographyVars.fonts.sans,
});

export const lettersSansAlternate = style({
  fontSize: 30,
  fontFamily: typographyVars.fonts.sansAlternate,
});

export const paragraphSansAlternate = style({
  ...createStyleObject(typographyVars.paragraphs.desktop.medium.capsize),
  fontFamily: typographyVars.fonts.sansAlternate,
});

export const lettersSansSerif = style({
  fontSize: 30,
  fontFamily: typographyVars.fonts.serif,
});

export const paragraphSerif = style({
  ...createStyleObject(typographyVars.paragraphs.desktop.medium.capsize),
  fontFamily: typographyVars.fonts.serif,
});

export const lettersSansMono = style({
  fontSize: 30,
  fontFamily: typographyVars.fonts.monospace,
});

export const paragraphMono = style({
  ...createStyleObject(typographyVars.paragraphs.desktop.medium.capsize),
  fontFamily: typographyVars.fonts.monospace,
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
