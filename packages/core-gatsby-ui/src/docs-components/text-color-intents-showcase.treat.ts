import { Theme } from '@newrade/core-react-ui/lib/design-system';
import capsize from 'capsize';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),

  textSans: style(({ theme, cssTheme }: Theme) => ({
    ...capsize({
      fontMetrics: theme.typography.fonts.sans[0].fontMetrics,
      capHeight: 34,
      lineGap: 30,
    }),
    fontFamily: theme.typography.fonts.sans[0].name,
  })),

  text: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 500,
  })),
};
