import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { typographyVars } from '../theme';

export const wrapper = style({});

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
