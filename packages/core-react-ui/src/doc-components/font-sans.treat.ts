import { createStyleObject } from '@capsizecss/core';
import { style } from 'treat';

import { Theme } from '../design-system/css-design-system';
import { getCSSTextStyles } from '../utilities/text.utilities';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),

  lettersSans: style(({ theme, cssTheme }: Theme) => ({
    ...createStyleObject({
      fontMetrics: theme.typography.fonts.sans[0].fontMetrics,
      capHeight: 100,
      lineGap: 10,
    }),
    fontFamily: theme.typography.fonts.sans[0].name,
  })),
  paragraphSans: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    fontFamily: theme.typography.fonts.sans[0].name,
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
