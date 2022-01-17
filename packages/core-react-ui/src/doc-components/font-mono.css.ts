import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';

import { typographyVars } from '../theme';
import { getCSSTextStyles } from '../utilities-theme/text.utilities';

export const wrapper = style({});

export const lettersSansMono = style({
  ...createStyleObject({
    fontMetrics: typographyVars.fonts.monospace[0].fontMetrics,
    capHeight: 100,
    lineGap: 10,
  }),
  fontFamily: typographyVars.fonts.monospace[0].name,
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
