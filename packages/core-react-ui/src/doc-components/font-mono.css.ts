import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { getCSSTextStyles } from '../utilities/text.utilities';

export const wrapper = style({});

export const lettersSansMono = style({
  ...createStyleObject({
    fontMetrics: theme.typography.fonts.monospace[0].fontMetrics,
    capHeight: 100,
    lineGap: 10,
  }),
  fontFamily: theme.typography.fonts.monospace[0].name,
});

export const paragraphMono = style({
  ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
  fontFamily: cssTheme.typography.fonts.monospace,
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
