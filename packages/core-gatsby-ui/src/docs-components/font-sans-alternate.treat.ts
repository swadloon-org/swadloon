import { Theme } from '@newrade/core-react-ui/src/design-system';
import { getCSSTextStyles } from '@newrade/core-react-ui/src/utilities';
import capsize from 'capsize';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),

  lettersSansAlternate: style(({ theme, cssTheme }: Theme) => ({
    ...capsize({
      fontMetrics: theme.typography.fonts.sansAlternate[0].fontMetrics,
      capHeight: 100,
      lineGap: 10,
    }),
    fontFamily: theme.typography.fonts.sansAlternate[0].name,
  })),
  paragraphSansAlternate: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    fontFamily: cssTheme.typography.fonts.sansAlternate[0].name,
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
