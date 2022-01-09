import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

export const wrapper = style({});

export const textSans = style({
  ...createStyleObject({
    fontMetrics: theme.typography.fonts.sans[0].fontMetrics,
    capHeight: 34,
    lineGap: 30,
  }),
  fontFamily: theme.typography.fonts.sans[0].name,
});

export const text = style({
  fontWeight: 500,
});
