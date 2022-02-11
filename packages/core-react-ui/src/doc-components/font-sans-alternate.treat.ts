import { createStyleObject } from '@capsizecss/core';
import { style } from 'treat';

import { Theme } from '../design-system/css-design-system';
import { getCSSTextStyles } from '../utilities/text.utilities';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),

  lettersSansAlternate: style(({ theme, cssTheme }: Theme) => ({
    ...createStyleObject({
      fontMetrics: theme.typography.fonts.sansAlternate[0].fontMetrics,
      capHeight: 100,
      lineGap: 10,
    }),
    fontFamily: theme.typography.fonts.sansAlternate[0].name,
  })),
  paragraphSansAlternate: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    fontFamily: cssTheme.typography.fonts.sansAlternate,
  })),
  letters: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 400,
  })),
  lettersMedium: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 500,
  })),
  lettersBold: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 600,
  })),
};
