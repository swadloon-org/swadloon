import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    padding: `0 ${cssTheme.sizing.var.x2}`,
  })),
  active: style(({ cssTheme, theme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.primary[100],
  })),
};
